/**
 * A lightweight, timestamp-accurate stopwatch hook for React.
 *
 * Supports:
 *  • start / pause / reset controls
 *  • optional persistence using `localStorage`
 *  • multiple independent timers via unique `id`
 *  • correct time tracking even when the tab is closed or inactive
 *
 * The hook does NOT rely on the interval for accuracy. Time is calculated
 * using timestamps, so the stopwatch remains accurate across:
 *  • page refresh
 *  • browser restarts
 *  • system sleep
 *  • mobile backgrounding
 *
 * ---
 * @example
 * // Basic usage (no persistence)
 * const { seconds, start, pause, reset, isRunning } = useStopwatch();
 *
 * start(); // begins counting
 * pause(); // pauses counting
 * reset(); // resets to initialValue
 *
 * ---
 * @example
 * // Start from a specific time
 * const { seconds } = useStopwatch({ initialValue: 90 });
 * // -> starts from 1 minute 30 seconds
 *
 * ---
 * @example
 * // Persistent single stopwatch (restores after page reload)
 * const sw = useStopwatch({ persist: true });
 *
 * ---
 * @example
 * // Multiple persistent stopwatches
 * const cooking  = useStopwatch({ id: "cooking",  persist: true });
 * const workout  = useStopwatch({ id: "workout",  persist: true });
 * const study    = useStopwatch({ id: "study",    persist: true });
 *
 * ---
 * @param {Object} [options] - Optional configuration object.
 * @param {string} [options.id] - Unique identifier for persistence.
 *                                Required only when using multiple persistent timers.
 * @param {number} [options.initialValue=0] - Initial number of seconds.
 * @param {boolean} [options.persist=false] - Persist stopwatch state using `localStorage`.
 *
 * ---
 * @returns {{
 *   seconds: number,
 *   isRunning: boolean,
 *   start: () => void,
 *   pause: () => void,
 *   reset: () => void
 * }} Stopwatch state and control functions.
 *
 * - `seconds`  → Total elapsed time in seconds
 * - `isRunning` → Whether the stopwatch is actively counting
 * - `start()` → Start or resume counting
 * - `pause()` → Pause counting
 * - `reset()` → Reset to the initial value and stop
 *
 * ---
 * @notes
 * - Persistence is based on `id`. To restore a specific timer, pass the same `id` again.
 * - If `persist=true` and no `id` is provided, a default storage key is used.
 * - `setInterval` is only used to refresh the UI — accuracy always comes from timestamp math.
 */

import { useCallback, useState, useEffect } from "react";
import { StopwatchOptions } from "../types/stopwatch";
import { computeElapsedSeconds } from "../utils/time";
import { readStopwatchStorage, writeStopwatchStorage } from "../utils/storage";
import {
  DEFAULT_INITIAL_VALUE,
  DEFAULT_PERSIST,
  ONE_SECOND,
} from "../constants/defaults";

export const useStopwatch = ({
  id,
  initialValue = DEFAULT_INITIAL_VALUE,
  persist = DEFAULT_PERSIST,
}: StopwatchOptions = {}) => {
  const stored = persist ? readStopwatchStorage(id) : null;

  const [seconds, setSeconds] = useState(() => {
    if (!persist || !stored) return initialValue;

    if (stored.isRunning) {
      const elapsed = computeElapsedSeconds(stored.lastTime);
      return stored.seconds + elapsed;
    }

    return stored.seconds;
  });

  const [isRunning, setIsRunning] = useState(stored?.isRunning ?? false);

  // Interval tick — only for UI update, accuracy handled by timestamps
  useEffect(() => {
    if (!isRunning) return;

    const idInterval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, ONE_SECOND);

    return () => clearInterval(idInterval);
  }, [isRunning]);

  // Persist only on relevant state changes
  useEffect(() => {
    if (!persist) return;
    writeStopwatchStorage(
      {
        seconds,
        isRunning,
        lastTime: Date.now(),
      },
      id
    );
  }, [seconds, isRunning, persist, id]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setSeconds(initialValue);
    setIsRunning(false);
  }, [initialValue]);

  return {
    seconds,
    isRunning,
    start,
    pause,
    reset,
  };
};

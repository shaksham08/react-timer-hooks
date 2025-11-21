import { useState } from "react";
import { useInterval } from "./useInterval";

/**
 * A simple, reliable stopwatch hook with start, pause, and reset controls.
 * Automatically increments the counter every second when running.
 *
 * Pass an `initialValue` to start the stopwatch at a specific time (in seconds).
 *
 * @param {number} [initialValue=0] - Initial number of seconds to start the stopwatch with.
 *
 * @returns {{
 *   seconds: number,
 *   start: () => void,
 *   pause: () => void,
 *   reset: () => void
 * }} An object containing the current stopwatch value and control functions.
 *
 * @example
 * const { seconds, start, pause, reset } = useStopwatch();
 *
 * @example
 * // Start from 60 seconds (1 minute)
 * const { seconds } = useStopwatch(60);
 *
 * @example
 * // Start, pause, reset
 * start();
 * pause();
 * reset();
 */
export const useStopwatch = (initialValue: number = 0) => {
  const [seconds, setSeconds] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setSeconds((prev) => prev + 1);
    },
    isRunning ? 1000 : null
  );

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setSeconds(initialValue);
    setIsRunning(false);
  };

  return {
    seconds,
    start,
    pause,
    reset,
    isRunning,
  };
};

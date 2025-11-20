import { useEffect, useRef } from "react";

/**
 * Runs a callback on a fixed interval and avoids stale closures.
 * Pass `null` to pause the interval.
 *
 * @param callback - Function to run on each tick.
 * @param delay - Interval delay in ms, or null to stop.
 *
 * @example
 * useInterval(() => setCount(c => c + 1), 1000);
 */
export const useInterval = (
  callback: () => void,
  delay: number | null
): void => {
  // Store the latest callback in a ref to avoid stale closures.
  // React re-renders update the ref, but the interval callback always reads from it.
  const savedCallback = useRef(callback);

  // Always store the latest callback without causing re-renders
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Setup interval
  useEffect(() => {
    // If delay is null, do not start the interval.
    // This allows pausing the interval declaratively.
    if (delay === null) return;

    const id = window.setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
};

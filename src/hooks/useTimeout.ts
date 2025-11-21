import { useEffect, useRef } from "react";

/**
 * Runs a callback once after a specified delay and avoids stale closures.
 * Pass `null` to disable the timeout.
 *
 * @param callback - Function to execute when the timeout completes.
 * @param delay - Timeout delay in ms, or `null` to skip running.
 *
 * @example
 * useTimeout(() => {
 *   console.log("Runs after 1 second");
 * }, 1000);
 *
 * @example
 * // Disable timeout
 * useTimeout(() => console.log("Will not run"), null);
 */
export const useTimeout = (
  callback: () => void,
  delay: number | null = null
): void => {
  // Store the latest callback to avoid stale closures.
  const savedCallback = useRef(callback);

  // Update ref whenever callback changes (without re-running timeout)
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Setup timeout
  useEffect(() => {
    // If delay is null, skip scheduling the timeout.
    if (delay === null) return;

    const timeoutId = window.setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);
};

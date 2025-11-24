import { StoredState } from "../types/stopwatch";
import {
  STOPWATCH_STORAGE_PREFIX,
  DEFAULT_STOPWATCH_ID,
} from "../constants/keys";

const getKey = (id?: string) =>
  `${STOPWATCH_STORAGE_PREFIX}${id ?? DEFAULT_STOPWATCH_ID}`;

export const readStopwatchStorage = (id?: string): StoredState | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(getKey(id));
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredState;
    if (
      typeof parsed.seconds === "number" &&
      typeof parsed.isRunning === "boolean" &&
      typeof parsed.lastTime === "number"
    ) {
      return parsed;
    }

    return null;
  } catch {
    return null;
  }
};

export const writeStopwatchStorage = (state: StoredState, id?: string) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getKey(id), JSON.stringify(state));
  } catch {
    // ignore storage write errors
  }
};

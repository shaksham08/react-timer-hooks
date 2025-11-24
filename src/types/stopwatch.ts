export interface StoredState {
  seconds: number;
  isRunning: boolean;
  lastTime: number;
}

export interface StopwatchOptions {
  /** Unique identifier for multi-timer persistence */
  id?: string;
  initialValue?: number;
  persist?: boolean;
}

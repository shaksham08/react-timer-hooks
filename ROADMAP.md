# 🕒 useStopwatch — Roadmap

This document outlines the feature evolution of the useStopwatch hook, including planned improvements, optional capabilities, and testing strategy.

## 🎯 Core Purpose

A simple, reliable, and customizable stopwatch hook with minimal re-renders — suitable for dashboards, fitness apps, productivity tools, and timers.

## 🚀 Feature Roadmap

| Status | Feature                      | Description                                       | Planned Version    |
| ------ | ---------------------------- | ------------------------------------------------- | ------------------ |
| ✅     | `start`                      | Begin incrementing elapsed time                   | v1.0.0             |
| ✅     | `pause`                      | Pause time incrementing                           | v1.0.0             |
| ✅     | `reset`                      | Reset elapsed time to initial value and pause     | v1.0.0             |
| ⏳     | `autoStart`                  | Automatically start timer on mount                | v1.1.0             |
| ⏳     | `interval` (configurable)    | Custom tick duration (e.g., 100ms, 2000ms)        | v1.1.0             |
| ⏳     | `onTick` callback            | Callback for each increment (ex: analytics, logs) | v1.2.0             |
| ⏳     | `onPause` / `onStart` events | Lifecycle callbacks for external logic            | v1.2.0             |
| ⏳     | `persistence`                | Save elapsed time / running state in localStorage | v1.3.0             |
| ⏳     | `maxDuration` stop rule      | Auto pause when hitting a target limit            | v1.3.0             |
| ❓     | Laps                         | Capture timestamps (`lap()`) for splits           | v1.4.0 (tentative) |
| ❓     | Time formatting helpers      | Return formatted values instead of raw seconds    | Backlog            |

## 📦 Release Timeline (Tentative)

| Version | Additions                                         |
| ------- | ------------------------------------------------- |
| v1.0.0  | `start`, `pause`, `reset`, `seconds`, `isRunning` |
| v1.1.0  | `autoStart`, custom interval                      |
| v1.2.0  | `onTick`, `onStart`, `onPause` callbacks          |
| v1.3.0  | Persistence w/ localStorage (optional param)      |
| v1.4.0  | Lap tracking API                                  |

## ⚙️ Config Options (Planned)

Eventually `useStopwatch` will support an options object:

```typescript
useStopwatch(initialValue, {
  autoStart: true,
  interval: 500,
  persistenceKey: "stopwatch",
  onTick: (sec) => {},
  onStart: () => {},
  onPause: () => {},
  maxDuration: 3600,
});
```

## 🧪 Testing Strategy

| Version    | Coverage                                            |
| ---------- | --------------------------------------------------- |
| v1.0.x     | Start / pause / reset / tick increment              |
| v1.1.x     | Auto-start + custom interval correctness            |
| v1.2.x     | Lifecycle callback reliability                      |
| v1.3.x     | Persistence across refresh and tab close            |
| Continuous | Prevent timing drift + performance under re-renders |

## 🔥 Current Focus

**Stability of v1.0.0 API**

→ Clean API, predictable state updates, minimal render overhead.

---

# 📌 Countdown Hooks — Roadmap

This document tracks the feature plan, priorities, and release progress of the React Countdown Hooks Package.

## ✅ Core Objectives

Provide reliable, accurate, and easy-to-use timer utilities for React applications with a focus on:

- **Declarative API**
- **Minimal re-renders**
- **Accurate timing without drift**
- **TS-first developer experience**

## 🚀 Feature Roadmap

| Status | Feature              | Description                                         | Planned Version    |
| ------ | -------------------- | --------------------------------------------------- | ------------------ |
| ✅     | `start`              | Begin the countdown from initial duration           | v1.0.0             |
| ✅     | `pause`              | Pause the countdown                                 | v1.0.0             |
| ✅     | `resume`             | Resume from paused time                             | v1.0.0             |
| ✅     | `reset`              | Reset to initial duration and pause                 | v1.0.0             |
| ⏳     | `autoStart`          | Auto start countdown on mount                       | v1.1.0             |
| ⏳     | `completionCallback` | Trigger callback when countdown reaches zero        | v1.1.0             |
| ⏳     | Tick accuracy system | Use system time delta to prevent drift              | v1.2.0             |
| ⏳     | Local persistence    | Persist countdown in localStorage across refresh    | v1.2.0             |
| ⏳     | Custom interval      | Change tick duration (e.g., 200ms, 500ms)           | v1.2.0             |
| ❓     | Lap markers          | Allow user to record timestamps                     | v1.3.0 (tentative) |
| ❓     | Async completion     | Support async completion callback for server events | Backlog            |

## 📦 Release Timeline (Tentative)

| Version | Scope                                                       |
| ------- | ----------------------------------------------------------- |
| v1.0.0  | Core countdown features (start / pause / reset / resume)    |
| v1.1.0  | Auto-start & completion callback                            |
| v1.2.0  | Accuracy improvements + configurable interval + persistence |
| v1.3.0  | Lap markers + exploration of async callback                 |

## 💡 Future Ideas (Not Committed Yet)

These are ideas worth exploring depending on demand.

| Idea                                    | Notes                                           |
| --------------------------------------- | ----------------------------------------------- |
| Support for multiple timers in one hook | Useful for task managers / game loops           |
| React Native support                    | Evaluate performance impact                     |
| Visual indicators API                   | Provide percentage progress instead of raw time |
| Time formatting helpers                 | `mm:ss`, `hh:mm:ss`, etc.                       |

## 🧪 Testing Plan

| Stage      | Coverage                                               |
| ---------- | ------------------------------------------------------ |
| v1.0.x     | Unit test for controls (start/pause/resume/reset)      |
| v1.1.x     | Callback + auto-start behavior                         |
| v1.2.x     | Drift prevention tests + cross-tab refresh persistence |
| Continuous | CI workflow + code coverage tracking                   |

## 📝 Contribution Workflow

- Check the roadmap item before starting work
- Open issue / proposal if modifying timeline
- PR should reference roadmap item
- Updated item should include:
  - changelog entry
  - README API examples if needed

## 🔥 Current Active Version: v1.0.0

→ **Focus:** Stabilizing core API

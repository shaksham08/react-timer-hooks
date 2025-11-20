<p align="center">
  <img src="https://img.shields.io/npm/v/react-timer-hooks?color=%2364b5f6&style=for-the-badge" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/react-timer-hooks?color=%23ffca28&style=for-the-badge" alt="downloads" />
  <img src="https://img.shields.io/bundlephobia/min/react-timer-hooks?color=%23ba68c8&style=for-the-badge" alt="bundle size" />
  <img src="https://img.shields.io/npm/l/react-timer-hooks?color=%238bc34a&style=for-the-badge" alt="license" />
</p>

<h1 align="center">⏱️ React Timer Hooks</h1>
<p align="center">Modern, lightweight, dependency-free React hooks for time-based logic.</p>
<p align="center">Stopwatch • Countdown • Interval • Timeout • Clock</p>

---

## 🏆 Why React Timer Hooks?

Most timer utilities are bloated, poorly typed, or overly complex.  
**react-timer-hooks** solves that with a clean, minimal API built for modern React.

---

### ✔ Lightweight & Zero Dependencies

- Pure React hooks — no unnecessary packages.

### ✔ Fully Typed with TypeScript

- Great IntelliSense + fully typed API.
- JavaScript users can also use it without extra setup.

### ✔ Modern Bundling

- Distributed as both ESM and CJS, built using [tsup](https://tsup.egoist.dev/) for maximum compatibility across Vite, Next.js, CRA, Webpack, and Node.

### ✔ Persistence Support

- Stopwatch and countdown values can survive refresh or tab close using localStorage.

### ✔ Modular & Tree-Shakable

- Import only the hooks you need.

### ✔ Real-World Use Cases

Perfect for workout timers, countdowns, productivity apps, dashboards, quizzes, and more.

---

## 🏆 Recommended Hook Bundle

This library includes a complete set of time-related hooks:

1. **useStopwatch**  
   Start, pause, resume, and reset — with optional persistence and real-time catch-up.
2. **useCountdown**  
   A reverse timer with optional completion callback.
3. **useInterval**  
   A safe interval hook that avoids stale closures and handles cleanup correctly.
4. **useTimeout**  
   A single-run delay hook, cleaned up automatically.
5. **useClock**  
   A live ticking clock for dashboards or realtime UI.
6. **usePersistentState (optional)**  
   A lightweight persistence helper used internally by the timers.

Together, these hooks create a small yet powerful time utility toolkit for React.

---

## 🚀 Why This Library Is the Best Choice

### 🧩 Full Timer Suite

Most libraries offer only one timer; this one provides a full set of tools.

### ⚡ Powered by tsup

Tiny output, fast builds, auto typings, and great compatibility.

### 🧠 Correct React Patterns

No duplicate intervals, no stale closures, predictable cleanup, and stable references.

### 🗃 Persistence Done Right

Supports both simple localStorage persistence and more advanced real-time elapsed syncing.

### ❤️ Beginner-Friendly, Production-Ready

Simple APIs for beginners, robust implementations for professional work.

---

## 💡 Basic Usage Example

```
import { useStopwatch } from "react-timer-hooks";

function App() {
  const { seconds, start, pause, reset, isRunning } = useStopwatch(0);

  return (
    <div>
      <h1>{seconds}s</h1>
      {!isRunning ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={pause}>Pause</button>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

```

---

## 📜 License

MIT License — open for both personal and commercial use.

---

## 🙌 Contributions

Contributions, issues, and suggestions are welcome.

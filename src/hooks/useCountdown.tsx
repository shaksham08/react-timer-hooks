/*
- features
    - start -> begin the countdown from the initial duration
    - pause -> pause the countdown
    - reset -> reset the countdown to initial duration and pause
    - resume -> resume the countdown from the paused duration 
    - auto-start (optional) -> to auto start countdown on mounting of component 
    - completionCallback -> allow user to call a callback on completion


- Good to have features
    - 
*/

export const useCountdown = () => {
  const start = () => {};

  const pause = () => {};

  const reset = () => {};

  const resume = () => {};

  return {
    start,
    pause,
    reset,
    resume,
  };
};

export const computeElapsedSeconds = (lastTime: number): number => {
  const diff = Date.now() - lastTime;
  return Math.floor(diff / 1000);
};

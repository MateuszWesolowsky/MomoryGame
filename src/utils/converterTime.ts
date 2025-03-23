export const convertTime = (
  seconds: number
): { minutes: number; seconds: number } => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return { minutes, seconds: remainingSeconds };
};

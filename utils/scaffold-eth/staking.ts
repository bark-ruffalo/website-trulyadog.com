const SECONDS_IN_YEAR = 365 * 24 * 60 * 60; // Total seconds in a year
const SECONDS_IN_DAY = 24 * 60 * 60; // Total seconds in a year

export const calculateRewardRate = (rewardRate: number, lockPeriodInSeconds: number): number => {
  return (rewardRate * (SECONDS_IN_YEAR / lockPeriodInSeconds)) / 100;
};

export const convertSecondsToDays = (seconds: number) => {
  const secondsInADay = 24 * 60 * 60; // 86,400 seconds in a day
  return seconds / SECONDS_IN_DAY;
};

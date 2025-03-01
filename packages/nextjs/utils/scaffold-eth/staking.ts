// Total seconds in a year
import scaffoldConfig from "~~/scaffold.config";

const SECONDS_IN_YEAR = 365 * 24 * 60 * 60; // Total seconds in a year
const SECONDS_IN_DAY = 24 * 60 * 60; // Total seconds in a year

export const calculateRewardRate = (rewardRate: number, lockPeriodInSeconds: number): number => {
  return (rewardRate * (SECONDS_IN_YEAR / lockPeriodInSeconds)) / 100;
};

export const convertSecondsToDays = (seconds: number) => {
  return seconds / SECONDS_IN_DAY;
};

export const getPoolTokens = (_poolId: number) => {
  return scaffoldConfig.poolTokens[_poolId];
};

export const scrollToPortfolio = () => {
  const portfolioElement = document.querySelector('[data-component="portfolio"]');
  if (portfolioElement) {
    const elementPosition = portfolioElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = elementPosition - startPosition;
    const duration = 2000; // 2 seconds duration
    let start: number | null = null;

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smoother animation
      const easeInOutCubic = (progress: number) => {
        return progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      };

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        portfolioElement?.classList.add("highlight-portfolio");
        setTimeout(() => {
          portfolioElement?.classList.remove("highlight-portfolio");
        }, 5000);
      }
    }

    requestAnimationFrame(animation);
  }
};

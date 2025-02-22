/**
 * We assume the user has a certain stake (in USD terms),
 * and we have an array of "incomes" that are each:
 *    - date: string (YYYY-MM-DD)
 *    - percentage: fraction of the *value staked* (e.g. 0.50 => 50% of staked)
 *
 * We'll sum up how much they've earned so far.
 */

// 1) Define type for each income round
type IncomeRound = {
  date: string; // e.g. "2024-12-23"
  percentage: number; // fraction of the staked amount, e.g. 0.50 => 50%
};

// 2) Hardcode your incomes array for now; update as you add more rounds
const incomes: IncomeRound[] = [
  // Example: on 2024-12-23, you gave 102.93% => 1.0293 as fraction
  // but if you literally mean 50% => 0.50
  { date: "2024-12-23", percentage: 1.0293 },
  { date: "2025-02-13", percentage: 0.4684 },
  { date: "2025-02-15", percentage: 0.2539 },
  // Future incomes can be added here
];

/**
 * A simple function that calculates how much total USD
 * a user has earned so far, given their initial stake in USD.
 *
 * @param stakeUSD The user's staked amount in dollars (e.g. 10000)
 * @returns total payout in dollars
 */
export function getUserPayout(stakeUSD: number): string {
  // 1) Today's date in YYYY-MM-DD format
  const todayStr = new Date().toISOString().split("T")[0];

  // 2) Sort incomes by date, ascending
  incomes.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // 3) Sum over all incomes that happened on/before today
  let totalPayout = 0;
  for (const inc of incomes) {
    if (new Date(inc.date) <= new Date(todayStr)) {
      // For each distribution, user earns stakeUSD * inc.percentage
      totalPayout += stakeUSD * inc.percentage;
    }
  }

  return `$${Math.round(totalPayout).toLocaleString("en-US")}`;
}

/**
 * Example usage:
 *   If you staked $10,000, how much have you earned so far?
 *
 *   const earned = getUserPayout(10000);
 *   console.log(`If you staked $10,000, you have earned $${earned.toFixed(2)} so far.`);
 */

function maxProfit(prices: number[]): number {
  let profit: number = 0;
  let low: number = 0;
  let high: number = 0;
  while (high < prices.length) {
    if (prices[low] <= prices[high]) {
      profit = Math.max(profit, prices[high] - prices[low]);
      high += 1;
      low = high;
    }
  }
  return profit;
}

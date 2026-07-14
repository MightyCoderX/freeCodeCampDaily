/* Max Profit

Given an array of daily stock prices and a budget (in dollars),
calculate the maximum profit you could make by buying and selling the stock
over the given period.

 - You may only sell after you buy.
 - You may perform at most one buy and one sell transaction.
    Once you sell, you cannot buy again.
 - You can only buy whole shares.
 - Return the maximum possible profit as a string, rounded down to the
    nearest cent and formatted to two decimal places.

Tests:

 1. getMaxProfit([5, 6], 50) should return "10.00".
 2. getMaxProfit([8, 2, 5, 10], 20) should return "80.00".
 3. getMaxProfit([4, 5, 3, 6], 20) should return "18.00".
 4. getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31".
 5. getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00".
 6. getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80".

*/

function getMaxProfit(prices, budget) {
    let min_i = 0;
    let min = prices[min_i];
    let max_diff = -1;

    let buy_price = 0;
    let sell_price = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] >= min && i != 0) continue;

        min = prices[i];
        min_i = i;

        let max = min;
        for (let j = i; j < prices.length; j++) {
            if (prices[j] > max) {
                max = prices[j];
            }
        }

        const diff = max - min;
        if (diff > max_diff) {
            max_diff = diff;
            buy_price = min;
            sell_price = max;
        }
    }

    const amount = Math.floor(budget / buy_price);
    const buy_total = amount * buy_price;
    const sell_total = amount * sell_price;
    const profit = sell_total - buy_total;

    return (Math.floor(profit * 100) / 100.0).toFixed(2);
}

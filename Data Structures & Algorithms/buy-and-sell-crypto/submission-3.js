class Solution {
    maxProfit(prices) {
        if (prices.length < 2) return 0; // Handle edge cases
        
        let maxProfit = 0;
        let buyingPrice = prices[0]; // Track the lowest price seen so far
        
        for (let i = 1; i < prices.length; i++) {
            const sellingPrice = prices[i];
            const profit = sellingPrice - buyingPrice;
            
            maxProfit = Math.max(maxProfit, profit);
            
            // Always keep track of the lowest price we've seen so far
            if (sellingPrice < buyingPrice) {
                buyingPrice = sellingPrice;
            }
        }
        
        return maxProfit;
    }
}
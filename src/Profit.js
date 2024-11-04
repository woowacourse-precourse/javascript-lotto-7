class Profit {
    static calcProfit(ranking, purchaseAmount) {
        const prizeAmounts = {
            1: 2000000000, // 1등
            2: 30000000,   // 2등
            3: 1500000,    // 3등
            4: 50000,      // 4등
            5: 5000        // 5등
        };

        const totalPrize = Object.keys(ranking).reduce((total, rank) => {
            return total + (ranking[rank] * prizeAmounts[rank]);
        }, 0);

        const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
        return parseFloat(profitRate);
    }
}

export default Profit;
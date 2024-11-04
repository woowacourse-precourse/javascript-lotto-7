class ResultCalculator {
    static calculateResults(matches) {
        const rewards = {
            6: 2000000000,
            5: 1500000,
            4: 50000,
            3: 5000,
            bonus: 30000000
        };
        const stats = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };
        let totalEarnings = 0;

        matches.forEach(({ matchedCount, hasBonus }) => {
            if (matchedCount === 6) {
                stats[6]++;
                totalEarnings += rewards[6];
            } else if (matchedCount === 5 && hasBonus) {
                stats["bonus"]++;
                totalEarnings += rewards.bonus;
            } else if (matchedCount === 5) {
                stats[5]++;
                totalEarnings += rewards[5];
            } else if (matchedCount >= 3) {
                stats[matchedCount]++;
                totalEarnings += rewards[matchedCount];
            }
        });
        return { stats, totalEarnings };
    }

    static calculateProfitRate(totalEarnings, purchaseAmount) {
        return parseFloat(((totalEarnings / purchaseAmount) * 100).toFixed(1));
    }
}

export default ResultCalculator;

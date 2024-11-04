import ResultCalculator from "../src/ResultCalculator";

describe("ResultCalculator 테스트", () => {
    test("로또 결과 통계 계산", () => {
        const matches = [
            { matchedCount: 3, hasBonus: false },
            { matchedCount: 4, hasBonus: false },
            { matchedCount: 5, hasBonus: false },
            { matchedCount: 5, hasBonus: true },
        ];

        const { stats, totalEarnings } = ResultCalculator.calculateResults(matches);

        expect(stats[3]).toBe(1);
        expect(stats[4]).toBe(1);
        expect(stats[5]).toBe(1);
        expect(stats["bonus"]).toBe(1);
        expect(stats[6]).toBe(0);
        expect(totalEarnings).toBe(31555000);
    });

    test("수익률 계산", () => {
        const profitRate = ResultCalculator.calculateProfitRate(2030500000, 5000);
        expect(profitRate).toBeCloseTo(40610000.0);
    });
});

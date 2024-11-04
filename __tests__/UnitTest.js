import { prize } from "../src/Prize.js";
import { initializePrizeTable, updatePrizeCount, checkLottoTickets, calculateTotalPrize, calculateProfitRate } from '../src/Prize.js';
import { Console } from "@woowacourse/mission-utils";
import { purchase } from "../src/Purchase.js";
import { LOTTO } from "../src/constant.js";
import { picknumber } from "../src/Random.js";
import { Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
    Console: {
        print: jest.fn(),
    },
    Random: {
        pickUniqueNumbersInRange: jest.fn(),
    }
}));

describe("Prize 모듈 단위 테스트", () => {
    test("initializePrizeTable 함수", () => {
        const prizeTable = initializePrizeTable();
        expect(prizeTable).toEqual({
            [LOTTO.MATCH_COUNT.THREE]: { count: 0, prize: LOTTO.PRIZES.THREE_MATCH },
            [LOTTO.MATCH_COUNT.FOUR]: { count: 0, prize: LOTTO.PRIZES.FOUR_MATCH },
            [LOTTO.MATCH_COUNT.FIVE]: { count: 0, prize: LOTTO.PRIZES.FIVE_MATCH },
            [LOTTO.MATCH_COUNT.FIVE_BONUS]: { count: 0, prize: LOTTO.PRIZES.FIVE_BONUS_MATCH },
            [LOTTO.MATCH_COUNT.SIX]: { count: 0, prize: LOTTO.PRIZES.SIX_MATCH }
        });
    });

    test("updatePrizeCount 함수", () => {
        const prizeTable = initializePrizeTable();
        updatePrizeCount(LOTTO.MATCH_COUNT.SIX, false, prizeTable);
        expect(prizeTable[LOTTO.MATCH_COUNT.SIX].count).toBe(1);

        updatePrizeCount(LOTTO.MATCH_COUNT.FIVE, true, prizeTable);
        expect(prizeTable[LOTTO.MATCH_COUNT.FIVE_BONUS].count).toBe(1);

        updatePrizeCount(LOTTO.MATCH_COUNT.THREE, false, prizeTable);
        expect(prizeTable[LOTTO.MATCH_COUNT.THREE].count).toBe(1);
    });

    test("checkLottoTickets 함수", () => {
        const mockLotto = [
            { getNumbers: () => [1, 2, 3, 4, 5, 6] },
            { getNumbers: () => [7, 8, 9, 10, 11, 12] },
            { getNumbers: () => [1, 2, 3, 4, 7, 8] }
        ];
        const winnum = [1, 2, 3, 4, 5, 6];
        const bonusnum = 7;
        const prizeTable = initializePrizeTable();

        const resultTable = checkLottoTickets(mockLotto, winnum, bonusnum, prizeTable);
        expect(resultTable[LOTTO.MATCH_COUNT.SIX].count).toBe(1);
        expect(resultTable[LOTTO.MATCH_COUNT.THREE].count).toBe(0);
        expect(resultTable[LOTTO.MATCH_COUNT.FOUR].count).toBe(1);
        expect(resultTable[LOTTO.MATCH_COUNT.FIVE_BONUS].count).toBe(0);
    });

    test("calculateTotalPrize 함수", () => {
        const prizeTable = {
            [LOTTO.MATCH_COUNT.THREE]: { count: 1, prize: 5000 },
            [LOTTO.MATCH_COUNT.FOUR]: { count: 1, prize: 50000 },
            [LOTTO.MATCH_COUNT.FIVE]: { count: 0, prize: 1500000 },
            [LOTTO.MATCH_COUNT.FIVE_BONUS]: { count: 0, prize: 30000000 },
            [LOTTO.MATCH_COUNT.SIX]: { count: 1, prize: 2000000000 }
        };

        const totalPrize = calculateTotalPrize(prizeTable);
        expect(totalPrize).toBe(2000055000);
    });

    test("calculateProfitRate 함수는 올바른 수익률을 계산한다.", () => {
        const totalPrize = 200005000;
        const totalLottos = 100;
        const profitRate = calculateProfitRate(totalPrize, totalLottos);
        expect(profitRate).toBe(((200005000 / (100 * LOTTO.PRICE)) * 100).toFixed(1));
    });
});

describe("prize 함수 테스트", () => {
    const sampleLotto = [
        { getNumbers: () => [1, 2, 3, 4, 5, 6] },
        { getNumbers: () => [7, 8, 9, 10, 11, 12] },
    ];
    const winnum = [1, 2, 3, 4, 5, 6];
    const bonusnum = 7;

    test("출력 확인", () => {
        prize(sampleLotto, winnum, bonusnum);
        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining("당첨 통계"));
        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining("총 수익률은"));
    });
});

describe("purchase 함수 테스트", () => {
    test("출력 확인", () => {
        Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
        const tickets = purchase(3);
        expect(tickets).toHaveLength(3);
        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining("3개를 구매했습니다."));
    });
});

describe("picknumber 함수 테스트", () => {
    test("숫자 확인", () => {
        Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
        const result = picknumber(1, 45, 6);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
      });
});
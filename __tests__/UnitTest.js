import { prize } from "../src/Prize.js";
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
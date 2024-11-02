import {
    PLEASE_INPUT_RIGHT_BONUS_NUMBER,
    PLEASE_INPUT_RIGHT_WIN_NUMBERS,
} from "../src/constant";
import LotteryGenerator from "../src/LotteryGenerator";
import LottoMatcher from "../src/LottoMatcher";
import { Random } from "@woowacourse/mission-utils";

describe("로또 번호 매칭 테스트", () => {
    test.each([
        "1,2,3,4,5",
        "일,2,3,4,5,6",
        "0,1,2,3,4,5",
        "1,2,3,4,5,46",
        "1,1,2,3,4,5",
    ])("당첨번호 예외 처리 테스트", (value) => {
        const lottoMatcher = new LottoMatcher();
        expect(() => (lottoMatcher.winNumberList = value)).toThrow(
            PLEASE_INPUT_RIGHT_WIN_NUMBERS
        );
    });

    test.each(["0", "46", "일", "1"])(
        "보너스 번호 예외 처리 테스트",
        (value) => {
            const lottoMatcher = new LottoMatcher();
            const winNumberList = "1,2,3,4,5,6";
            lottoMatcher.winNumberList = winNumberList;
            expect(() => (lottoMatcher.bounusNumber = value)).toThrow(
                PLEASE_INPUT_RIGHT_BONUS_NUMBER
            );
        }
    );

    const lottoList = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 8],
        [1, 2, 3, 4, 9, 10],
        [1, 2, 3, 10, 11, 12],
        [1, 2, 3, 4, 5, 7],
    ];
    lottoList.forEach((lotto, index) => {
        test("matchLotto 메소드 테스트", () => {
            const winNumberList = "1,2,3,4,5,6";
            const bonusNumber = "7";

            const result = {
                winNumberMatch: index === 4 ? 5 : 6 - index,
                bonusNumberMatch: index === 4 ? 1 : 0,
            };

            const lottoMatcher = new LottoMatcher();
            lottoMatcher.winNumberList = winNumberList;
            lottoMatcher.bounusNumber = bonusNumber;
            expect(lottoMatcher.matchLotto(lotto)).toEqual(result);
        });
    });

    Array.from({ length: 5 }).forEach((_, index) => {
        test("matchLotto 메소드 테스트", () => {
            const lottoResult = {
                winNumberMatch: index === 4 ? 5 : 6 - index,
                bonusNumberMatch: index === 4 ? 1 : 0,
            };

            const result = {
                1: index === 0 ? 1 : 0,
                2: index === 4 ? 1 : 0,
                3: index === 1 ? 1 : 0,
                4: index === 2 ? 1 : 0,
                5: index === 3 ? 1 : 0,
            };

            const lottoMatcher = new LottoMatcher();
            lottoMatcher.matchRank(lottoResult);

            expect(lottoMatcher.lottoRankResult).toEqual(result);
        });
    });

    test("makeResult 메소드 정상작동 확인", () => {
        const randomArray = [1, 2, 3, 4, 5, 6];

        jest.spyOn(Random, "pickUniqueNumbersInRange").mockReturnValueOnce(
            randomArray
        );

        const buyingCost = "1000";
        const lottoList = new LotteryGenerator(buyingCost);

        const winNumberList = "1,2,3,4,5,6";
        const bonusNumber = "7";

        const lottoMatcher = new LottoMatcher();
        lottoMatcher.winNumberList = winNumberList;
        lottoMatcher.bounusNumber = bonusNumber;

        const result = {
            1: 1,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };

        lottoMatcher.makeResult(lottoList);

        expect(lottoMatcher.lottoRankResult).toEqual(result);
    });
});

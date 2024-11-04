import LottoResultCalculator from "../src/LottoResultCalculator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("LottoResultCalculator 클래스 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test("당첨 결과를 정확히 계산한다.", () => {
        const lottoResultCalculator = new LottoResultCalculator();
        const winnigNums = [1, 2, 3, 4, 5, 6];
        const bonusNum = 7;
        const lottos = [
            { getNumbers: () => [1, 2, 3, 4, 5, 6] }, // 1등
            { getNumbers: () => [1, 2, 3, 4, 5, 7] }, // 2등
            { getNumbers: () => [1, 2, 3, 4, 5, 8] }, // 3등
            { getNumbers: () => [1, 2, 3, 4, 8, 9] }, // 4등
            { getNumbers: () => [1, 2, 3, 8, 9, 10] }, // 5등 
        ];

        lottoResultCalculator.calculateResults(winnigNums, bonusNum, lottos);

        expect(lottoResultCalculator.results[1]).toBe(1);
        expect(lottoResultCalculator.results[2]).toBe(1);
        expect(lottoResultCalculator.results[3]).toBe(1);
        expect(lottoResultCalculator.results[4]).toBe(1);
        expect(lottoResultCalculator.results[5]).toBe(1);
    });

    test("구매 금액을 바탕으로 수익률을 정확히 계산한다.", () => {
        const lottoResultCalculator = new LottoResultCalculator();
        const purchaseAmount = 8000;
        lottoResultCalculator.totalPrize = 5000;

        lottoResultCalculator.calculateRate(purchaseAmount);

        expect(lottoResultCalculator.returnOfRate).toBe("62.5");
    });

    test("당첨 결과와 수익률을 올바르게 출력한다.", () => {
        const logSpy = getLogSpy();
        const lottoResultCalculator = new LottoResultCalculator();
        lottoResultCalculator.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1};
        lottoResultCalculator.totalPrize = 5000;
        lottoResultCalculator.returnOfRate = "62.5";

        lottoResultCalculator.printLottoResult();
        lottoResultCalculator.printReturnOfRate();

        expect(logSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 1개");
        expect(logSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 0개");
        expect(logSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
        expect(logSpy).toHaveBeenCalledWith("5개 일치, 보너스 볼 일치 (30,000,000원) - 0개");
        expect(logSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 0개");
        expect(logSpy).toHaveBeenCalledWith("총 수익률은 62.5%입니다.");
    }) ;
});
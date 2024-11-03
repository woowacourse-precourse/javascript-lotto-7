import LotteryGenerator from "../src/LotteryGenerator";
import LottoMatcher from "../src/LottoMatcher";
import ProfitCalculator from "../src/ProfitCalculator";
import { Random } from "@woowacourse/mission-utils";

describe("수익률 계산기 클래스 테스트", () => {
    test("calculatePrize 메소드 테스트", () => {
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
        lottoMatcher.makeResult(lottoList);

        const profitcalculator = new ProfitCalculator(lottoMatcher, lottoList);

        const result = 2000000000;
        profitcalculator.calculatePrize();

        expect(profitcalculator.calculatePrize()).toEqual(result);
    });

    test("calculateProfit 메소드 테스트", () => {
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
        lottoMatcher.makeResult(lottoList);

        const profitcalculator = new ProfitCalculator(lottoMatcher, lottoList);

        const result = "200000000.0";

        expect(profitcalculator.calculateProfit()).toEqual(result);
    });
});

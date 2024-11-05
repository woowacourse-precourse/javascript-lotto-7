import { PLEASE_INPUT_RIGHT_COST } from "../src/constant.js";
import LotteryGenerator from "../src/LotteryGenerator.js";
import { Random } from "@woowacourse/mission-utils";

describe("로또 생성기 테스트", () => {
    test("로또 생성기 catch error 정상작동 테스트", () => {
        const randomArrays = [
            [0, 2, 3, 4, 5, 6],
            [0, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
        ];

        const result = [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
        ];

        randomArrays.map((randomArray) => {
            jest.spyOn(Random, "pickUniqueNumbersInRange").mockReturnValueOnce(
                randomArray
            );
        });

        expect(new LotteryGenerator("3000").lottoList).toEqual(result);
    });

    test("buyingAmount 제대로 할당되는지 확인", () => {
        const input = "3000원";
        const result = 3;
        expect(new LotteryGenerator(input).buyingAmount).toEqual(result);
    });

    test.each(["3000원원", "3000$", "3500", "3500원", "0원", "100원", "0000"])(
        "LotteryGenerator class 예외 처리",
        (value) => {
            expect(() => new LotteryGenerator(value)).toThrow(
                PLEASE_INPUT_RIGHT_COST
            );
        }
    );

    test.each(["2000 ", " 2000", "2000 원", "2000  원", " 2000 원 "])(
        "공백 포함한 문자 정상 작동 테스트",
        (value) => {
            const randomArrays = [
                [1, 2, 3, 4, 5, 6],
                [1, 2, 3, 4, 5, 6],
            ];

            const result = [
                [1, 2, 3, 4, 5, 6],
                [1, 2, 3, 4, 5, 6],
            ];

            randomArrays.map((randomArray) => {
                jest.spyOn(
                    Random,
                    "pickUniqueNumbersInRange"
                ).mockReturnValueOnce(randomArray);
            });

            expect(new LotteryGenerator(value).lottoList).toEqual(result);
        }
    );
});

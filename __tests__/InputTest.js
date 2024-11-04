import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/Utils/Constants";
import App from "../src/App";


const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};


const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const runException = async (input, errorMessage) => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};


describe("구매금액 입력 테스트", () => {
    test("숫자가 아닌 구매 금액 입력시 에러를 발생시킨다.", async () => {
        await runException(["100j"], ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_NUMBER_ERROR);
    });

    test("1000으로 나누어떨어지지 않는 구매 금액 입력시 에러를 발생시킨다.", async () => {
        await runException(["100"], ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
    });
});


describe("당첨 번호 입력 테스트", () => {
    test("당첨 번호 입력이 6개 초과 됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,6,7"], ERROR_MESSAGE.WINNING_NUMBER_EXEED_ERROR);
    });

    test("당첨 번호 입력이 6개 미만 입력 됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5"], ERROR_MESSAGE.WINNING_NUMBER_LACK_ERROR);
    });

    test("숫자가 아닌 당첨 번호가 입력 됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,i"], ERROR_MESSAGE.WINNING_NUMBER_NOT_NUMBER_ERROR);
    });

    test("숫자이지만 1~45 범위에 포함되지 않는 당첨번호가 입력됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,66"], ERROR_MESSAGE.WINNING_NUMBER_RANGE_ERROR);
    });

    test("비어있는 당첨번호가 입력될 시 에러를 발생시킨다.", async () => {
        await runException(["1000", ""], ERROR_MESSAGE.WINNING_NUMBER_LACK_ERROR);
    });

    test("중복되는 당첨 번호가 입력됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,5"], ERROR_MESSAGE.WINNING_NUMBER_LACK_ERROR);
    });
});


describe("보너스 번호 입력 테스트", () => {
    test("빈 보너스 번호가 입력됐을 시 에러를 발생시킨다..", async () => {
        await runException(["1000", "1,2,3,4,5,6", ""], ERROR_MESSAGE.BONUS_NUMBER_LACK_ERROR);
    });

    test("보너스 번호가 2개 이상 입력 됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,6", "7, 8"], ERROR_MESSAGE.BONUS_NUMBER_EXEED_ERROR);
    });

    test("숫자가 아닌 보너스 번호가 입력 됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,6", "i"], ERROR_MESSAGE.BONUS_NUMBER_NOT_NUMBER_ERROR);
    });

    test("숫자이지만 1~45 범위에 포함되지 않는 보너스 번호가 입력됐을 시 에러를 발생시킨다.", async () => {
        await runException(["1000", "1,2,3,4,5,6", "88"], ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR);
    });

    test("당첨 번호와 중복되는 보너스 번호가 입력됐을 시 에러를 발생시킨다..", async () => {
        await runException(["1000", "1,2,3,4,5,6", "2"], ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR);
    });

});

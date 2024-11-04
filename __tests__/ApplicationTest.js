import App from "../src/App.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import {MATCH_COUNTER} from "../src/constants/objects.js";


const runLottoTest = async (mockRandomNumbers, mockInputs, expectedLogs) => {
    // given
    const logSpy = getLogSpy();

    mockRandoms(mockRandomNumbers);
    mockQuestions(mockInputs);

    // when
    const app = new App();
    await app.run();
    console.log(logSpy.mock.calls.map(call => call[0]));

    // then
    expectedLogs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
};
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

const runException = async (input) => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("로또 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        MATCH_COUNTER.THREE_MATCH.cnt = 0;
        MATCH_COUNTER.FOUR_MATCH.cnt = 0;
        MATCH_COUNTER.FIVE_MATCH.cnt = 0;
        MATCH_COUNTER.BONUS_MATCH.cnt = 0;
        MATCH_COUNTER.SIX_MATCH.cnt = 0;
    });


    test("기능 테스트 - 1등 2번", async () => {
        await runLottoTest(
            [
                [8, 21, 23, 41, 42, 43],
                [3, 5, 11, 16, 32, 38],
                [7, 11, 16, 35, 36, 44],
                [1, 8, 11, 31, 41, 42],
                [13, 14, 16, 38, 42, 45],
                [7, 11, 30, 40, 42, 43],
                [2, 13, 22, 32, 38, 45],
                [1, 3, 5, 14, 22, 45],
            ],
            ["8000", "1,2,3,4,5,6", "7"],
            [
                "8개를 구매했습니다.",
                "[8, 21, 23, 41, 42, 43]",
                "[3, 5, 11, 16, 32, 38]",
                "[7, 11, 16, 35, 36, 44]",
                "[1, 8, 11, 31, 41, 42]",
                "[13, 14, 16, 38, 42, 45]",
                "[7, 11, 30, 40, 42, 43]",
                "[2, 13, 22, 32, 38, 45]",
                "[1, 3, 5, 14, 22, 45]",
                '당첨통계',
                "---",
                "3개 일치 (5,000원) - 1개",
                "4개 일치 (50,000원) - 0개",
                "5개 일치 (1,500,000원) - 0개",
                "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
                "6개 일치 (2,000,000,000원) - 0개",
                "총 수익률은 62.5%입니다."
            ]
        );
    });

    test("기능 테스트 - 2등 1번", async () => {
        await runLottoTest(
            [
                [8, 21, 23, 41, 42, 43],
                [3, 5, 11, 16, 32, 38],
                [7, 11, 16, 35, 36, 44],
                [1, 8, 11, 31, 41, 42],
                [13, 14, 16, 38, 42, 45],
                [7, 11, 30, 40, 42, 43],
                [1, 2, 3, 4, 5, 6],
                [1, 2, 3, 4, 5, 45],
            ],
            ["8000", "1,2,3,4,5,6", "7"],
            [
                "8개를 구매했습니다.",
                "[8, 21, 23, 41, 42, 43]",
                "[3, 5, 11, 16, 32, 38]",
                "[7, 11, 16, 35, 36, 44]",
                "[1, 8, 11, 31, 41, 42]",
                "[13, 14, 16, 38, 42, 45]",
                "[7, 11, 30, 40, 42, 43]",
                "[1, 2, 3, 4, 5, 6]",
                "[1, 2, 3, 4, 5, 45]",
                '당첨통계',
                "---",
                "3개 일치 (5,000원) - 0개",
                "4개 일치 (50,000원) - 0개",
                "5개 일치 (1,500,000원) - 1개",
                "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
                "6개 일치 (2,000,000,000원) - 1개",
                "총 수익률은 25018750.0%입니다.",
            ]
        );
    });
});
describe("로또 예외 상황 테스트", () => {
    // 1. 구매 금액이 잘못된 경우 - 숫자가 아닌 문자 입력
    test("구매 금액이 숫자가 아닐 경우 오류 발생", async () => {
        await runException("천원"); // 잘못된 금액 입력
    });

    // 2. 구매 금액이 1000원 단위가 아닌 경우
    test("구매 금액이 1000원 단위가 아닌 경우 오류 발생", async () => {
        await runException("1500"); // 1000원 단위가 아닌 금액 입력
    });

    // 3. 입력 번호가 6개가 아닌 경우
    test("입력 번호가 6개가 아닌 경우 오류 발생", async () => {
        await runException("1,2,3,4,5"); // 숫자 5개만 입력
    });

    // 4. 입력 번호에 중복된 숫자가 있을 경우
    test("입력 번호에 중복된 숫자가 있을 경우 오류 발생", async () => {
        await runException("1,2,3,3,4,5"); // 중복된 숫자 입력
    });

    // 5. 입력 번호가 1~45 범위를 벗어나는 경우
    test("입력 번호가 1~45 범위를 벗어나는 경우 오류 발생", async () => {
        await runException("0,2,3,4,5,6"); // 0은 유효한 번호가 아님
    });

    test("입력 번호가 1~45 범위를 벗어나는 경우 오류 발생", async () => {
        await runException("1,2,3,4,5,46"); // 46은 유효한 번호가 아님
    });
});
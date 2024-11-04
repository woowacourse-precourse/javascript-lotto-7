import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { ERROR_HEADER, ERROR_TITLE } from "../src/constants/errorMessage.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runException = async (errorTitle) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  mockRandoms([RANDOM_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`${ERROR_HEADER} ${errorTitle}`));
};

const runMoneyException = async (input) => {
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);
  runException(ERROR_TITLE.money);
};

const runWinningNumbersException = async (input) => {
  const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,6", "7"];
  mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);
  runException(ERROR_TITLE.lottoNumbers);
};

const runBonusNumbersException = async (input) => {
  const INPUT_NUMBERS_TO_END = ["7"];
  mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);
  runException(ERROR_TITLE.bonusNumber);
};

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("기능 테스트", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  describe("예외 테스트", () => {
    describe("구매 금액이", () => {
      test("숫자가 아닌 경우 에러 반환", async () => {
        await runMoneyException("1000j");
      });
      test("1000원으로 나누어 떨어지지 않는 경우 에러 반환", async () => {
        await runMoneyException("1500");
      });
      test.each([
        "0", "500",
      ])("1000원 미만인 경우 에러 반환", async (num) => {
        await runMoneyException(num);
      });
    });
    describe("당첨 번호가", () => {
      test("숫자가 아닌 경우 에러 반환", async () => {
        await runWinningNumbersException(["1000", "1,2,3,4,5,6j"]);
      });
      test.each([
        "1,2,3,4,5,46", "0,1,2,3,4,5",
      ])("1부터 45 사이의 숫자가 아닌 경우 에러 반환", async (numbers) => {
        await runWinningNumbersException(["1000", numbers]);
      });
    });
    describe("보너스 번호가", () => {
      test("숫자가 아닌 경우 에러 반환", async () => {
        await runBonusNumbersException(["1000", "1,2,3,4,5,6", "7j"]);
      });
      test.each([
        "46", "0",
      ])("1부터 45 사이의 숫자가 아닌 경우 에러 반환", async (number) => {
        await runBonusNumbersException(["1000", "1,2,3,4,5,6", number]);
      });
      test("당첨 번호와 중복되는 경우 에러 반환", async () => {
        await runBonusNumbersException(["1000", "1,2,3,4,5,6", "6"]);
      });
    });
  });
});

import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

const purchaseAmountException = async (input) => {
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

const winningNumbersException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
}

const bonusNumberExcption = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ["7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
}

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

  test("로또 구매 입력값을 입력하지 않은 예외 테스트", async () => {
    await purchaseAmountException("");
  });

  test("로또 구매 입력값 숫자 외의 문자 입력 예외 테스트", async () => {
    await purchaseAmountException("1000j");
  });

  test("로또 구매 입력값 1000으로 떨어지지 않는 숫자 입력 예외 테스트", async () => {
    await purchaseAmountException("4500");
  });

  test("로또 구매 입력값 1000으로 떨어지지 않는 숫자 입력 예외 테스트", async () => {
    await purchaseAmountException("4500");
  });

  test("당첨 번호 입력값을 입력하지 않은 예외 테스트", async () => {
    await winningNumbersException(["1000", ""]);
  });
  test("당첨 번호 입력값 컴마와 숫자로 이루어지지 않았을 때 예외 테스트", async () => {
    await winningNumbersException(["1000", "1.2.3.4.5.6"]);
  });

  test("당첨 번호 입력값 중복 예외 테스트", async () => {
    await winningNumbersException(["1000", "1,2,3,4,5,5"]);
  });

  test("당첨 번호 입력값 범위 예외 테스트", async () => {
    await winningNumbersException(["1000", "1,2,3,4,5,46"]);
  });

  test("당첨 번호 입력값 갯수 예외 테스트", async () => {
    await winningNumbersException(["1000", "1,2,3,4,5,6,7"]);
  });

  test("보너스 번호 입력값 예외 테스트", async () => {
    await winningNumbersException(["1000", "1,2,3,4,5,6", "abc"]);
  });

  test("보너스 번호 입력값 범위 예외 테스트", async () => {
    await winningNumbersException(["1000", "1,2,3,4,5,6", "47"]);
  });
});

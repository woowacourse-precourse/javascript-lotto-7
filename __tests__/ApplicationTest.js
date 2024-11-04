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

  test("기능 테스트 - 3개 일치", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [2, 3, 4, 35, 36, 44],
    ]);
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    const logs = [
      "3개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[2, 3, 4, 35, 36, 44]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 166.7%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 4개 일치", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [2, 3, 4, 5, 36, 44],
    ]);
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    const logs = [
      "3개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[2, 3, 4, 5, 36, 44]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 1666.7%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 5개 일치", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [2, 3, 4, 5, 6, 44],
      [7, 8, 25, 28, 36, 40],
    ]);
    mockQuestions(["4000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    const logs = [
      "4개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[2, 3, 4, 5, 6, 44]",
      "[7, 8, 25, 28, 36, 40]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 37500.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 5개 일치, 보너스 볼 일치", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [2, 3, 4, 5, 6, 44],
      [7, 8, 25, 28, 36, 40],
    ]);
    mockQuestions(["4000", "1,2,3,4,5,6", "44"]);

    const app = new App();
    await app.run();

    const logs = [
      "4개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[2, 3, 4, 5, 6, 44]",
      "[7, 8, 25, 28, 36, 40]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 750000.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 6개 일치", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [2, 3, 4, 5, 6, 44],
      [7, 8, 25, 28, 36, 40],
    ]);
    mockQuestions(["4000", "44,2,3,4,5,6", "1"]);

    const app = new App();
    await app.run();

    const logs = [
      "4개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[2, 3, 4, 5, 6, 44]",
      "[7, 8, 25, 28, 36, 40]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 50000000.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 여러 금액 당첨", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [2, 16, 19, 21, 28, 30],
      [13, 18, 27, 32, 34, 43],
      [22, 23, 29, 31, 41, 44],
      [1, 5, 9, 23, 39, 44],
      [4, 8, 18, 27, 30, 39],
      [8, 20, 24, 26, 31, 42],
      [4, 7, 10, 11, 12, 31],
      [3, 14, 31, 36, 38, 40],
      [10, 11, 13, 21, 32, 42],
      [8, 9, 13, 24, 27, 41],
    ]);
    mockQuestions(["10000", "1,5,9,8,13,44", "10"]);

    const app = new App();
    await app.run();

    const logs = [
      "10개를 구매했습니다.",
      "[2, 16, 19, 21, 28, 30]",
      "[13, 18, 27, 32, 34, 43]",
      "[22, 23, 29, 31, 41, 44]",
      "[1, 5, 9, 23, 39, 44]",
      "[4, 8, 18, 27, 30, 39]",
      "[8, 20, 24, 26, 31, 42]",
      "[4, 7, 10, 11, 12, 31]",
      "[3, 14, 31, 36, 38, 40]",
      "[10, 11, 13, 21, 32, 42]",
      "[8, 9, 13, 24, 27, 41]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 550.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 금액 여러번 당첨", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [2, 16, 19, 21, 28, 30],
      [13, 18, 27, 32, 34, 43],
      [22, 23, 29, 31, 41, 44],
      [1, 5, 9, 23, 39, 44],
      [4, 8, 18, 27, 30, 39],
      [8, 20, 24, 26, 31, 42],
      [4, 7, 10, 11, 12, 31],
      [3, 14, 31, 36, 38, 40],
      [10, 11, 13, 21, 32, 42],
      [8, 9, 13, 24, 27, 41],
    ]);
    mockQuestions(["10000", "2,16,19,1,5,9", "10"]);

    const app = new App();
    await app.run();

    const logs = [
      "10개를 구매했습니다.",
      "[2, 16, 19, 21, 28, 30]",
      "[13, 18, 27, 32, 34, 43]",
      "[22, 23, 29, 31, 41, 44]",
      "[1, 5, 9, 23, 39, 44]",
      "[4, 8, 18, 27, 30, 39]",
      "[8, 20, 24, 26, 31, 42]",
      "[4, 7, 10, 11, 12, 31]",
      "[3, 14, 31, 36, 38, 40]",
      "[10, 11, 13, 21, 32, 42]",
      "[8, 9, 13, 24, 27, 41]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 100.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });


  test("예외 테스트", async () => {
    await runException("1000j");
  });

  test("예외 테스트 - 숫자가 아닌 구입금액", async () => {
    await runException("hey");
  });

  test("예외 테스트 - 음수인 구입금액", async () => {
    await runException("-2000");
  });

  test("예외 테스트 - 실수인 구입금액", async () => {
    await runException("3000.333");
  });

  test("예외 테스트 - 0인 구입금액", async () => {
    await runException("0");
  });

  test("예외 테스트 - 공백인 구입금액", async () => {
    await runException(" ");
  });

  test("예외 테스트 - 1000보다 작은 숫자인 구입금액", async () => {
    await runException("770");
  });

  test("예외 테스트 - 100000보다 큰 숫자인 구입금액", async () => {
    await runException("100001");
  });

  test("예외 테스트 - 1000으로 나누어 떨어지지 않는 숫자인 구입금액", async () => {
    await runException("3333");
  });
  
  test("예외 테스트 - 6개가 넘어가는 당첨 번호", async () => {
    await runException(["3000", "1,2,3,4,5,6,7"]);
  });

  test("예외 테스트 - 6개가 안 되는 당첨 번호", async () => {
    await runException(["3000", "4,5,6,7"]);
  });

  test("예외 테스트 - 중복이 있는 당첨 번호", async () => {
    await runException(["3000", "1,2,3,4,5,1"]);
  });

  test("예외 테스트 - 범위를 벗어나는 숫자가 있는 당첨 번호", async () => {
    await runException(["3000", "1,2,3,4,50,10"]);
  });

  test("예외 테스트 - 숫자가 아닌 값이 있는 당첨 번호", async () => {
    await runException(["3000", "gang,2,3,4,5,6"]);
  });

  test("예외 테스트 - 실수가 포함되어 있는 당첨 번호", async () => {
    await runException(["3000", "1.1,2,3,4,5,6"]);
  });


  test("예외 테스트 - 숫자가 아닌 보너스 번호", async () => {
    await runException(["3000", "1,2,3,4,5,6", "OMG"]);
  });

  test("예외 테스트 - 범위를 벗어난 보너스 번호", async () => {
    await runException(["3000", "1,2,3,4,5,6", "100"]);
  });

  test("예외 테스트 - 당첨 번호와 중복되는 보너스 번호", async () => {
    await runException(["3000", "1,2,3,4,5,6", "5"]);
  });

  test("예외 테스트 - 실수인 보너스 번호", async () => {
    await runException(["3000", "1,2,3,4,5,6", "5.3"]);
  });
});

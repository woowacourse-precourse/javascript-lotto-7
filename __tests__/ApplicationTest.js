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

  test("예외 테스트", async () => {
    await runException("1000j");
  });
});

describe("로또 테스트2", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("14000원으로 14개의 로또를 구매하고 다양한 당첨이 있는 경우", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],    // 6개 일치 (1등)
      [1, 2, 3, 4, 5, 7],    // 5개 일치 + 보너스 (2등)
      [1, 2, 3, 4, 5, 8],    // 5개 일치 (3등)
      [1, 2, 3, 4, 8, 9],    // 4개 일치 (4등)
      [1, 2, 3, 4, 8, 10],   // 4개 일치 (4등)
      [1, 2, 3, 8, 9, 10],   // 3개 일치 (5등)
      [1, 2, 3, 8, 9, 11],   // 3개 일치 (5등)
      [1, 2, 8, 9, 10, 11],  // 2개 일치
      [1, 2, 8, 9, 10, 12],  // 2개 일치
      [1, 8, 9, 10, 11, 12], // 1개 일치
      [1, 8, 9, 10, 11, 13], // 1개 일치
      [8, 9, 10, 11, 12, 13], // 0개 일치
      [8, 9, 10, 11, 12, 14], // 0개 일치
      [8, 9, 10, 11, 13, 14], // 0개 일치
    ]);
    mockQuestions(["14000", "1,2,3,4,5,6", "7"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "14개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 8]",
      "[1, 2, 3, 4, 8, 9]",
      "[1, 2, 3, 4, 8, 10]",
      "[1, 2, 3, 8, 9, 10]",
      "[1, 2, 3, 8, 9, 11]",
      "[1, 2, 8, 9, 10, 11]",
      "[1, 2, 8, 9, 10, 12]",
      "[1, 8, 9, 10, 11, 12]",
      "[1, 8, 9, 10, 11, 13]",
      "[8, 9, 10, 11, 12, 13]",
      "[8, 9, 10, 11, 12, 14]",
      "[8, 9, 10, 11, 13, 14]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 2개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 14511500.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
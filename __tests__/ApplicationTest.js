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

  test("로또번호 입력 부적절 경우 및 5개 일치하는 경우", async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 10];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,49", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 로또 번호는 1에서 45사이의 수입니다"));

    const logs = [
        "1개를 구매했습니다.",
        "[1, 2, 3, 4, 5, 10]",
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 1개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 0개",
        "총 수익률은 150000.0%입니다."
    ];

    logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("보너스 번호 입력 부적절 경우 및 보너스 번호 일치 경우", async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 10];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "a", "10"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 보너스 번호는 숫자이어야 합니다"));

    const logs = [
        "1개를 구매했습니다.",
        "[1, 2, 3, 4, 5, 10]",
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
        "6개 일치 (2,000,000,000원) - 0개",
        "총 수익률은 3000000.0%입니다."
    ];

    logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또 구매 금액 입력 부적절 경우 및 테스트 1", async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [
      [1, 2, 3, 4, 7, 12], /// 6
      [1, 2, 3, 4, 20, 21],/// 4
      [1, 2, 3, 4, 20, 22],/// 4
      [1, 2, 3, 4, 30, 35],///  4
      [1, 2, 10, 12, 14, 15], /// 3
      [1, 2, 3, 4, 7, 12], /// 6
      [1, 2, 3, 7, 8, 15], /// 4
      [1, 2, 3, 4, 7, 16] /// 5b
    ];
    const INPUT_NUMBERS_TO_END = ["a", "8000", "1,2,3,4,7,12", "16"];

    mockRandoms(RANDOM_NUMBERS_TO_END);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 로또 가격은 숫자이어야 합니다"));

    const logs = [
      "8개를 구매했습니다.",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 20, 21]",
      "[1, 2, 3, 4, 20, 22]",
      "[1, 2, 3, 4, 30, 35]",
      "[1, 2, 10, 12, 14, 15]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 7, 8, 15]",
      "[1, 2, 3, 4, 7, 16]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 4개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 2개",
      "총 수익률은 50377562.5%입니다.",
    ];

    logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

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
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 기능 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("정상적으로 로또를 구매하고 당첨 결과를 출력한다", async () => {
    const logSpy = getLogSpy();

    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
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

    const app = new App();
    await app.run();

    const expectedLogs = [
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

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또 구매 시 입력한 금액에 맞는 개수의 로또가 발행된다", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["3000"]);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith("3개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith("[8, 21, 23, 41, 42, 43]");
    expect(logSpy).toHaveBeenCalledWith("[3, 5, 11, 16, 32, 38]");
    expect(logSpy).toHaveBeenCalledWith("[7, 11, 16, 35, 36, 44]");
  });

  test("당첨 번호와 보너스 번호 입력이 올바르게 저장된다", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith("당첨 번호를 입력해 주세요.");
    expect(logSpy).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");
    expect(app.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(app.bonusNumber).toBe(7);
  });

  test("당첨 결과가 올바르게 계산되고 출력된다", async () => {
    const logSpy = getLogSpy();

    mockQuestions(["5000", "1,2,3,4,5,6", "7"]);
    mockRandoms([
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
      [1, 2, 3, 4, 5, 8], // 3등
      [1, 2, 3, 4, 9, 10], // 4등
      [1, 2, 3, 11, 12, 13], // 5등
    ]);

    const app = new App();
    await app.run();

    const expectedLogs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 4000062.5%입니다.",
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("로또 예외 처리 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("구매 금액이 1000원 단위가 아닐 때 에러 메시지 출력", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["1500"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다."));
  });

  test("당첨 번호에 유효 범위를 벗어난 숫자가 있을 때 에러 메시지 출력", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["3000", "1,2,3,4,5,46"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 6개의 숫자여야 합니다."));
  });

  test("보너스 번호가 유효 범위를 벗어나거나 당첨 번호와 중복될 때 에러 메시지 출력", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["3000", "1,2,3,4,5,6", "46"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다."));
  });
});

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

  test("로또 구매 시 올바른 개수의 로또가 발행된다.", async () => {
    // given
    const logSpy = getLogSpy();
    const purchaseAmount = "3000"; // 3000원 입력, 1000원당 한 장이므로 3개 발행 예상
    const expectedLottoCount = 3;
    mockQuestions([purchaseAmount]);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(`${expectedLottoCount}개를 구매했습니다.`);
    expect(logSpy).toHaveBeenCalledWith("[8, 21, 23, 41, 42, 43]");
    expect(logSpy).toHaveBeenCalledWith("[3, 5, 11, 16, 32, 38]");
    expect(logSpy).toHaveBeenCalledWith("[7, 11, 16, 35, 36, 44]");
  });

  test("당첨 번호와 보너스 번호 입력 시 올바르게 저장된다.", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]); // 구입 금액, 당첨 번호, 보너스 번호 입력

    const app = new App();
    await app.run();

    // 당첨 번호와 보너스 번호 입력을 확인하는 메시지가 출력되는지 확인
    expect(logSpy).toHaveBeenCalledWith("당첨 번호를 입력해 주세요.");
    expect(logSpy).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");

    // 추가로 당첨 번호와 보너스 번호가 올바르게 저장되는지 확인할 수 있습니다.
    expect(app.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(app.bonusNumber).toBe(7);
  });

  test("당첨 결과 계산 및 출력", async () => {
    const logSpy = getLogSpy();

    mockQuestions(["5000", "1,2,3,4,5,6", "7"]); // 구입 금액, 당첨 번호, 보너스 번호 입력
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
      "1등 - 2,000,000,000원",
      "2등 - 30,000,000원",
      "3등 - 1,500,000원",
      "4등 - 50,000원",
      "5등 - 5,000원",
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  
});

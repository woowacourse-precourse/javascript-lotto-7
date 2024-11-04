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
  let logSpy;

  beforeEach(() => {
    jest.restoreAllMocks();
    logSpy = getLogSpy();
  });

  test("정상적인 로또 구매 및 당첨 결과 출력", async () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
    ]);
    mockQuestions(["4000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    const expectedLogs = [
      "4개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "당첨 통계",
      "---",
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

  test("잘못된 구매 금액 입력 시 에러 메시지 출력 후 다시 입력받음", async () => {
    mockQuestions(["1500", "2000", "3000"]);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    expect(logSpy).toHaveBeenCalledWith("3개를 구매했습니다.");
  });

  test("잘못된 당첨 번호 입력 시 에러 메시지 출력 후 다시 입력받음", async () => {
    mockQuestions(["4000", "1,2,3,4,5", "1,2,3,4,5,46", "1,2,3,4,5,6"]);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith("[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 6개의 숫자여야 합니다.");
    expect(logSpy).toHaveBeenCalledWith("당첨 번호를 입력해 주세요.");
  });

  test("잘못된 보너스 번호 입력 시 에러 메시지 출력 후 다시 입력받음", async () => {
    mockQuestions(["4000", "1,2,3,4,5,6", "6", "7"]);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다.");
    expect(logSpy).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");
  });
});

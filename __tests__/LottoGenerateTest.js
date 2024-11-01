import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runTest = async (input, logs) => {
  const logSpy = getLogSpy();

  mockQuestions(input, logs);

  const app = new App();
  await app.run();

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

describe("로또 구매 금액 입력 테스트 - 성공 케이스", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("성공 테스트 - 로또 금액에 맞는 로또 개수 출력", async () => {
    await runTest(["5000"], ["5개를 구매했습니다."]);
  });
});

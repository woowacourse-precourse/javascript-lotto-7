import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants/constants.js";

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

const runException = async (input) => {
  const logSpy = getLogSpy();
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("입력 검증 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("구입 금액에 숫자가 아닌 값이 입력된 경우 예외가 발생한다.", async () => {
    await runException("woowa");
  });

  test("구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.", async () => {
    await runException("1500");
  });

  test("구입 금액이 1,000원 미만인 경우 예외가 발생한다.", async () => {
    await runException("500");
  });

  test("보너스 번호가 숫자가 아닌 값인 경우 예외가 발생한다.", async () => {
    await runException("10000", "1,2,3,4,5,6", "a");
  });

  test("보너스 번호가 여러 개로 입력된 경우 예외가 발생한다.", async () => {
    await runException("10000", "1,2,3,4,5,6", "1,2");
  });

  test("보너스 번호가 1~45 범위를 벗어난 경우 예외가 발생한다.", async () => {
    await runException("10000", "1,2,3,4,5,6", "50");
  });

  test("보너스 번호가 당첨 번호와 중복되는 경우 예외가 발생한다.", async () => {
    await runException("10000", "1,2,3,4,5,6", "1");
  });
});

import { MissionUtils } from "@woowacourse/mission-utils";
import App, { LottoVendingMachine } from "../src/App.js";
import { MESSAGES } from "../src/constants/messages.js";

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
  // given
  const logSpy = getLogSpy();

  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const LottoVM = new LottoVendingMachine();
  await LottoVM.purchaseLottoAmount();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("LottoVendingMachine 클래스 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("금액이 정수가 아니면 예외가 발생한다.", async () => {
    await runException("1000.5");
  });

  test("금액이 1000원 미만이면 예외가 발생한다.", async () => {
    await runException("500");
  });

  test("금액이 1000원 단위가 아니면 예외가 발생한다.", async () => {
    await runException("1521");
  });
});

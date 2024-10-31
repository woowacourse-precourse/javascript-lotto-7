import LottoMachine from "../src/LottoMachine.js";
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

describe("입력 금액 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("유효한 금액을 입력하면 그 값을 반환해야 한다", async () => {
    // given
    mockQuestions(["6000"]);

    // when
    const result = await LottoMachine.getUserPurchaseAmount();

    // then
    expect(result).toBe(6000);
  });

  test("유효하지 않은 금액을 입력하면 에러 메시지를 출력하고 다시 요청해야 한다", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["5500", "6000"]);

    // when
    const result = await LottoMachine.getUserPurchaseAmount();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(result).toBe(6000);
  });

  test("잘못된 금액을 계속 입력하면 계속해서 에러 메시지가 출력되어야 한다", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["a", "-1000", "6000"]);

    // when
    const result = await LottoMachine.getUserPurchaseAmount();

    // then
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(result).toBe(6000);
  });
});

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

describe("당첨, 보너스번호 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("올바른 당첨번호, 보너스번호를 입력하면 당첨번호와 보너스 번호가 반환된다.", async () => {
    // given
    mockQuestions(["1,2,3,4,5,6", "8"]);

    const logSpy = getLogSpy();

    // when
    const result = await LottoMachine.getWinningAndBonusNumber();

    // then
    expect(result).toStrictEqual([[1, 2, 3, 4, 5, 6], 8]);

    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("유효하지 않은 번호를 입력하면 에러 메시지를 출력하고 다시 요청해야 한다", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["1,2,3,4,5,5", "1,2,3,4,5,6", "6", "8"]);

    // when
    const result = await LottoMachine.getWinningAndBonusNumber();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(result).toStrictEqual([[1, 2, 3, 4, 5, 6], 8]);
  });
});

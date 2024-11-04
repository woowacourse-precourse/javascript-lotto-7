import LottoManager from "../src/LottoManager";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "../src/constants";

describe("로또 매니저 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mockConsole = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  const mockReadLine = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    inputs.forEach((input) => {
      MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);
    });
  };

  const mockRandom = () => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue([
      1, 2, 3, 4, 5, 6,
    ]);
  };

  test("금액 입력 시 예외 테스트", async () => {
    // given
    const logSpy = mockConsole();
    mockRandom();

    // when & then
    // 공백 입력
    mockReadLine(["", "1000", "1,2,3,4,5,6", "7"]);
    const manager1 = new LottoManager();
    await manager1.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.MONEY.EMPTY_NUMBER);

    // 숫자가 아닌 입력
    mockReadLine(["abc", "1000", "1,2,3,4,5,6", "7"]);
    const manager2 = new LottoManager();
    await manager2.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.MONEY.INVALID_NUMBER);

    // 1000으로 나누어떨어지지 않는 금액
    mockReadLine(["1500", "1000", "1,2,3,4,5,6", "7"]);
    const manager3 = new LottoManager();
    await manager3.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.MONEY.INVALID_UNIT);
  });

  test("당첨 번호 입력 시 예외 테스트", async () => {
    // given
    const logSpy = mockConsole();
    mockRandom();

    // when & then
    // 공백이 포함된 경우
    mockReadLine(["1000", "1,2,3,4,5,", "1,2,3,4,5,6", "7"]);
    const manager1 = new LottoManager();
    await manager1.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.LOTTO.EMPTY_NUMBER);

    // 숫자가 아닌 값이 포함된 경우
    mockReadLine(["1000", "1,2,3,4,5,a", "1,2,3,4,5,6", "7"]);
    const manager2 = new LottoManager();
    await manager2.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.LOTTO.INVALID_NUMBER);
  });

  test("보너스 번호 입력 시 예외 테스트", async () => {
    // given
    const logSpy = mockConsole();
    mockRandom();

    // when & then
    // 공백 입력
    mockReadLine(["1000", "1,2,3,4,5,6", "", "7"]);
    const manager1 = new LottoManager();
    await manager1.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.LOTTO.EMPTY_NUMBER);

    // 숫자가 아닌 입력
    mockReadLine(["1000", "1,2,3,4,5,6", "a", "7"]);
    const manager2 = new LottoManager();
    await manager2.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.LOTTO.INVALID_NUMBER);

    // 정수가 아닌 입력
    mockReadLine(["1000", "1,2,3,4,5,6", "7.5", "7"]);
    const manager3 = new LottoManager();
    await manager3.play();
    expect(logSpy).toHaveBeenCalledWith(ERROR.LOTTO.NOT_INTEGER);
  });
});

import { MissionUtils } from "@woowacourse/mission-utils";
import LottoManager from "../src/LottoManager";
import { ERROR } from "../src/constants";

describe("로또 매니저 기능 테스트", () => {
  const mockConsole = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  test("로또 구매 기능 테스트", async () => {
    const logSpy = mockConsole();
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([7, 8, 9, 10, 11, 12]);

    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce("2000") // 구매 금액
      .mockResolvedValueOnce("1,2,3,4,5,6") // 당첨 번호
      .mockResolvedValueOnce("7"); // 보너스 번호

    const manager = new LottoManager();
    await manager.play();

    expect(logSpy).toHaveBeenCalledWith("2개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
    expect(logSpy).toHaveBeenCalledWith("[7, 8, 9, 10, 11, 12]");
  });

  test("당첨 통계 출력 테스트", async () => {
    const logSpy = mockConsole();
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6]);

    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce("1000") // 구매 금액
      .mockResolvedValueOnce("1,2,3,4,5,6") // 당첨 번호
      .mockResolvedValueOnce("7"); // 보너스 번호

    const manager = new LottoManager();
    await manager.play();

    expect(logSpy).toHaveBeenCalledWith("1개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개 일치"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("4개 일치"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치"));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("5개 일치, 보너스")
    );
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("6개 일치"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은"));
  });

  test("수익률 계산 테스트", async () => {
    const logSpy = mockConsole();
    // 6개 모두 일치하는 로또 생성 (1등)
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6]);

    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce("1000")
      .mockResolvedValueOnce("1,2,3,4,5,6")
      .mockResolvedValueOnce("7");

    const manager = new LottoManager();
    await manager.play();

    // 1등(2,000,000,000원) / 구매금액(1,000원) * 100 = 200,000,000.0%
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("200000000.0%")
    );
  });
});

describe("로또 매니저 예외 테스트", () => {
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
    const logSpy = mockConsole();
    mockRandom();

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
    const logSpy = mockConsole();
    mockRandom();

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
    const logSpy = mockConsole();
    mockRandom();

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

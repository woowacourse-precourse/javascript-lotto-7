import LottoApp from "../src/LottoApp";
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

describe("입력 테스트" , () => {
  let lotto;
  beforeEach(() => {
    lotto = new LottoApp();
  })

  test("구입 금액 입력 테스트", async () => {
    mockQuestions(["1000"]);
    const money = await lotto.getPaymentAmount();
    expect(money).toBe("1000");
  });

  test("로또 당첨 번호 입력 테스트", async () => {
    mockQuestions(["1, 2, 3, 4, 5, 6"]);
    const numbers = await lotto.getLottoNumbers();
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 보너스 번호 입력 테스트", async () => {
    mockQuestions(["31"]);
    const bonus = await lotto.getBonusNumber();
    expect(bonus).toEqual("31");
  });

  test("잘못된 구입 금액 입력 테스트", async () => {
    const logspy = getLogSpy();
    mockQuestions(["1300", "1000"]);
    const money = await lotto.getPaymentAmount();
    expect(logspy).toHaveBeenCalledWith("[ERROR] : 구입 금액은 1000원 단위로 입력해야 합니다.");
    expect(money).toBe("1000");
  })

  test("잘못된 로또 당첨 번호 입력 테스트", async () => {
    const logspy = getLogSpy();
    mockQuestions(["1, 2, 3, 4, 5, 50", "1, 2, 3, 5, 6, 7"]);
    const numbers = await lotto.getLottoNumbers();
    expect(logspy).toHaveBeenCalledWith("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.");
    expect(numbers).toEqual([1, 2, 3, 5, 6, 7]);
  })
})
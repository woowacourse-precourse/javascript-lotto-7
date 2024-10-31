import LottoApp from "../src/LottoApp";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("입력 테스트" , () => {
  let lotto;
  beforeEach(() => {
    lotto = new LottoApp();
  })

  test("구입 금액 입력 테스트", async () => {
    mockQuestions(["10"]);
    const money = await lotto.getPaymentAmount();
    expect(money).toBe("10");
  });

  test("로또 당첨 번호 입력 테스트", async () => {
    mockQuestions(["1, 2, 3, 4, 5, 6"]);
    const numbers = await lotto.getLottoNumbers();
    expect(numbers).toBe("1, 2, 3, 4, 5, 6");
  });

  test("로또 보너스 번호 입력 테스트", async () => {
    mockQuestions(["31"]);
    const bonus = await lotto.getBonusNumber();
    expect(bonus).toBe("31");
  });
})
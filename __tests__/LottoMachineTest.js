/* eslint-disable no-new */
import LottoMachine from "../src/LottoMachine.js";

describe("로또 기계 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("hi");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 로또 금액으로 나뉘어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("1009");
    }).toThrow("[ERROR]");
  });

  test("구입 금액에 따라 구매한 티켓 개수를 출력한다.", () => {
    const input = "8000";

    const lottoMachine = new LottoMachine(input);

    expect(lottoMachine.getTicketAmountString()).toBe("8개를 구매했습니다.");
  });
});

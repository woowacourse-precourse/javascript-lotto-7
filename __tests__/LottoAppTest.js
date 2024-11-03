import LottoApp from "../src/LottoApp";
import { ERROR_MESSAGES } from "../src/constants.js";

describe("LottoApp 클래스 테스트", () => {
  let lottoApp;

  beforeEach(() => {
    lottoApp = new LottoApp();
  });

  test("구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.validateAmount(1500);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 0 이하인 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.validateAmount(0);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      lottoApp.validateAmount(-1000);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.validateAmount("abc");
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      lottoApp.validateAmount(null);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 유효한 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      lottoApp.validateAmount(1000);
    }).not.toThrow();

    expect(() => {
      lottoApp.validateAmount(2000);
    }).not.toThrow();
  });
});

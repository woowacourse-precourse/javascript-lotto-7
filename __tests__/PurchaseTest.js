import Purchase from "../src/Purchase";
import { PURCHASE_ERROR_MESSAGE } from "../src/constants";

describe("Purchase 클래스 테스트", () => {
  test("숫자 외의 다른 타입을 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Purchase("a");
    }).toThrow(PURCHASE_ERROR_MESSAGE.IS_NOT_NUMBER);
  });

  test("빈 문자열 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Purchase("");
    }).toThrow(PURCHASE_ERROR_MESSAGE.INVALID_BLANK);
  });

  test("음수 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Purchase("-1000");
    }).toThrow(PURCHASE_ERROR_MESSAGE.IS_NOT_POSITIVE_NUMBER);
  });

  test("1000의 배수가 아닌 금액 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Purchase("1500");
    }).toThrow(PURCHASE_ERROR_MESSAGE.IS_NOT_MULTIPLE_OF_THOUSAND);
  });

  test("구입 금액을 올바르게 계산한다.", () => {
    const purchase = new Purchase("3000");
    expect(purchase.getPurchaseCount()).toBe(3);
  });

  test("구입한 로또 번호 목록을 생성한다.", () => {
    const purchase = new Purchase("2000");
    purchase.generateAllRandomNumbers();
    expect(purchase.getRandomNumbersList()).toHaveLength(2);
  });

  test("구입 총 금액을 올바르게 반환한다.", () => {
    const purchase = new Purchase("4000");
    expect(purchase.getTotalCost()).toBe(4000);
  });
});
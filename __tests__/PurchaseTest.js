import Purchase from "../src/Purchase";
import { Console } from "@woowacourse/mission-utils";

describe("구입 클래스 테스트", () => {
  let purchase;

  beforeEach(() => {
    purchase = new Purchase();
  });

  test("구입금액이 1000원 단위가 아닐 때 예외가 발생한다.", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("1500");
    await expect(purchase.getPayment()).rejects.toThrow("[ERROR] 1,000원 단위로 입력해주세요.");
  });

  test("구입금액이 1000원 단위가 아닐 때 예외가 발생한다.", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("2700");
    await expect(purchase.getPayment()).rejects.toThrow("[ERROR] 1,000원 단위로 입력해주세요.");
  });

  test("구입금액이 1000원 단위일 때 올바른 로또 개수를 반환한다.", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("5000");
    const amount = await purchase.getPayment();
    expect(amount).toBe(5);
  });
});
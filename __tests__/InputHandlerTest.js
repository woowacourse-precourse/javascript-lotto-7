import InputHandler from "../src/InputHandler.js";
import { Console } from "@woowacourse/mission-utils";

test("올바른 금액 입력 테스트", async () => {
    Console.readLineAsync = jest.fn(() => Promise.resolve("3000"));
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    expect(purchaseAmount).toBe(3000);
});

test("잘못된 금액 입력시 예외 발생", async () => {
    Console.readLineAsync = jest.fn(() => Promise.resolve("200"));
    await expect(InputHandler.getPurchaseAmount()).rejects.toThrow("[ERROR]");
});

import WinningNumberHandler from "../src/WinningNumberHandler.js";
import { Console } from "@woowacourse/mission-utils";

test("올바른 당첨 번호 입력", async () => {
    Console.readLineAsync = jest.fn(() => Promise.resolve("1,2,3,4,5,6"));
    const winningNumbers = await WinningNumberHandler.getWinningNumbers();
    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
});

test("보너스 번호 입력", async () => {
    Console.readLineAsync = jest.fn(() => Promise.resolve("7"));
    const bonusNumber = await WinningNumberHandler.getBonusNumber();
    expect(bonusNumber).toBe(7);
});

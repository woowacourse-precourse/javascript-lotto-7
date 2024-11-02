import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from "../src/utils/InputHandler";

const mockConsoleInput = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputHandler 테스트", () => {
  test("입력된 구매 금액을 변수에 저장한다.", async () => {
    const input = "5000";
    mockConsoleInput([input]);

    const purchaseAmount = await InputHandler.getInputPurchaseAmount();

    expect(purchaseAmount).toBe(5000);
  });

  test("입력된 당첨 번호를 변수에 저장한다.", async () => {
    const input = "1,2,3,4,5,6";
    mockConsoleInput([input]);

    const winningNumbers = await InputHandler.getInputWinningNumbers();

    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("입력된 보너스 번호를 변수에 저장한다.", async () => {
    const input = "7";
    mockConsoleInput([input]);

    const bonusNumber = await InputHandler.getInputBonusNumber();

    expect(bonusNumber).toBe(7);
  });
});

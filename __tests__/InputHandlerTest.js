import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants/constant.js";
import InputHandler from "../src/InputHandler.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe("InputHandler 클래스 테스트", () => {
  let inputHandler;

  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  describe("getPurchaseAmount 메서드", () => {
    it("올바른 금액이 입력되었을 때, 입력 값을 반환해야 한다.", async () => {
      Console.readLineAsync.mockResolvedValue("5000");
      const amount = await inputHandler.getPurchaseAmount();
      expect(amount).toBe("5000");
    });
  });

  describe("getWinningNumbers 메서드", () => {
    it("올바른 로또 번호가 입력되었을 때, 번호 리스트를 반환해야 한다.", async () => {
      Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");
      const numbers = await inputHandler.getWinningNumbers();
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("getBonusNumber 메서드", () => {
    it("올바른 보너스 번호가 입력되었을 때, 보너스 번호를 반환해야 한다.", async () => {
      Console.readLineAsync.mockResolvedValue("7");
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = await inputHandler.getBonusNumber(winningNumbers);
      expect(bonusNumber).toBe(7);
    });
  });
});

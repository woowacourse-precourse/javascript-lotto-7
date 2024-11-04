import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants/constant.js";
import InputHandler from "../src/InputHandler.js";

// Console 모듈 전체를 한 번에 모킹
jest.mock("@woowacourse/mission-utils");

describe("InputHandler 클래스 테스트", () => {
  let inputHandler;

  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  afterEach(() => {
    jest.clearAllMocks(); // 각 테스트 후 모킹을 초기화
  });

  describe("getPurchaseAmount 메서드", () => {
    it("올바른 금액이 입력되었을 경우, 입력 값을 반환해야 한다.", async () => {
      Console.readLineAsync.mockResolvedValue("5000");
      const amount = await inputHandler.getPurchaseAmount();
      expect(amount).toBe("5000");
    });

    it("금액이 0일 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("0").mockResolvedValueOnce("1000");

      await inputHandler.getPurchaseAmount();

      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.PURCHASE_AMOUNT_ZERO);
    });
    it("음수 금액이 입력되었을 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("-1000").mockResolvedValueOnce("1000");
      await inputHandler.getPurchaseAmount();
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);
    });

    it("금액이 1000의 배수가 아닐 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("750").mockResolvedValueOnce("2000");
      await inputHandler.getPurchaseAmount();
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    });

    it("숫자가 아닌 값이 입력되었을 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("abc").mockResolvedValueOnce("1000");
      await inputHandler.getPurchaseAmount();
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    });
  });

  describe("getWinningNumbers 메서드", () => {
    it("올바른 로또 번호가 입력되었을 경우, 번호 리스트를 반환해야 한다.", async () => {
      Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");
      const numbers = await inputHandler.getWinningNumbers();
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("6개의 숫자가 아닌 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("1,2,3,4,5").mockResolvedValueOnce("1,2,3,4,5,6");
      await inputHandler.getWinningNumbers();
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    });

    it("중복된 숫자가 포함된 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync
        .mockResolvedValueOnce("1,2,3,4,5,5")
        .mockResolvedValueOnce("1,2,3,4,5,6");
      await inputHandler.getWinningNumbers();
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    });

    it("범위를 벗어난 숫자가 포함된 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync
        .mockResolvedValueOnce("0,2,3,4,5,6")
        .mockResolvedValueOnce("1,2,3,4,5,6");
      await inputHandler.getWinningNumbers();
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    });
  });

  describe("getBonusNumber 메서드", () => {
    it("올바른 보너스 번호가 입력되었을 경우, 보너스 번호를 반환해야 한다.", async () => {
      Console.readLineAsync.mockResolvedValue("7");
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = await inputHandler.getBonusNumber(winningNumbers);
      expect(bonusNumber).toBe(7);
    });
    it("범위를 벗어난 보너스 번호가 입력된 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("50").mockResolvedValueOnce("7");
      await inputHandler.getBonusNumber([1, 2, 3, 4, 5, 6]);
      expect(Console.print).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    });

    it("보너스 번호가 당첨 번호에 포함된 경우, 에러 메시지를 출력하고 재입력을 요청한다.", async () => {
      Console.readLineAsync.mockResolvedValueOnce("6").mockResolvedValueOnce("7");
      await inputHandler.getBonusNumber([1, 2, 3, 4, 5, 6]);
      expect(Console.print).toHaveBeenCalledWith(
        ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER_WITH_WINNING
      );
    });
  });
});

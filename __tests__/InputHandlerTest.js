import InputHandler from "../src/handler/InputHandler.js";
import InputView from "../src/views/InputView.js";
import { ERROR_MESSAGES } from "../src/utils/ErrorMessageConstants.js";

jest.mock("../src/views/InputView");

describe("InputHandler 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("구매 금액 입력 처리", () => {
    test("1000원 단위가 아닌 금액 입력시 예외 발생", async () => {
      InputView.inputPurchaseAmount.mockResolvedValue("8500");

      await expect(async () => {
        await InputHandler.getPurchaseAmount();
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    });

    test("숫자가 아닌 입력시 예외 발생", async () => {
      InputView.inputPurchaseAmount.mockResolvedValue("abc");

      await expect(async () => {
        await InputHandler.getPurchaseAmount();
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    });
  });

  describe("당첨 번호 입력 처리", () => {
    test("잘못된 개수의 번호 입력시 예외 발생", async () => {
      InputView.inputWinningNumbers.mockResolvedValue("1,2,3,4,5");

      await expect(async () => {
        await InputHandler.getWinningNumbers();
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_LENGTH);
    });

    test("범위를 벗어난 번호 입력시 예외 발생", async () => {
      InputView.inputWinningNumbers.mockResolvedValue("1,2,3,4,5,46");

      await expect(async () => {
        await InputHandler.getWinningNumbers();
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_RANGE);
    });

    test("중복된 번호 입력시 예외 발생", async () => {
      InputView.inputWinningNumbers.mockResolvedValue("1,2,3,4,5,5");

      await expect(async () => {
        await InputHandler.getWinningNumbers();
      }).rejects.toThrow(ERROR_MESSAGES.DUPLICATED_NUMBER);
    });
  });

  describe("보너스 번호 입력 처리", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test("당첨 번호와 중복된 번호 입력 시 예외 처리", async () => {
      InputView.inputBonusNumber.mockResolvedValue("1");

      await expect(async () => {
        await InputHandler.getBonusNumber(winningNumbers);
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    });

    test("범위를 벗어난 보너스 번호 입력 시 예외 처리", async () => {
      InputView.inputBonusNumber.mockResolvedValue("46");

      await expect(async () => {
        await InputHandler.getBonusNumber(winningNumbers);
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_RANGE);
    });

    test("숫자가 아닌 보너스 번호 입력 시 예외 처리", async () => {
      InputView.inputBonusNumber.mockResolvedValue("abc");

      await expect(async () => {
        await InputHandler.getBonusNumber(winningNumbers);
      }).rejects.toThrow(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    });
  });
});

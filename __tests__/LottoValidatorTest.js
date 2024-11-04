import LottoValidator from "../src/utils/LottoValidator.js";
import { ERROR_MESSAGE } from "../src/utils/constants.js";

describe("LottoValidator - 로또 검증 로직", () => {
  describe("validatePurchaseAmount", () => {
    test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validatePurchaseAmount("not-a-number");
      }).toThrow(ERROR_MESSAGE.INVALID_ISNAN);
    });

    test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validatePurchaseAmount(1500);
      }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE);
    });

    test("구입 금액이 0 이하이면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validatePurchaseAmount(0);
      }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE);
    });

    test("구입 금액이 1000원 단위의 양수인 경우 예외가 발생하지 않는다.", () => {
      expect(() => {
        LottoValidator.validatePurchaseAmount(3000);
      }).not.toThrow();
    });
  });

  describe("validateWinningNumbers", () => {
    test("로또 번호가 6개가 아니면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validateWinningNumbers([1, 2, 3, 4, 5]);
      }).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validateWinningNumbers([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR_MESSAGE.DUPLICATE_NUMBER);
    });

    test("로또 번호가 1부터 45 범위를 벗어나면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validateWinningNumbers([0, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);

      expect(() => {
        LottoValidator.validateWinningNumbers([46, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
    });

    test("올바른 로또 번호를 입력한 경우 예외가 발생하지 않는다.", () => {
      expect(() => {
        LottoValidator.validateWinningNumbers([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });

  describe("validateBonusNumber", () => {
    test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validateBonusNumber(5, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    });

    test("보너스 번호가 1부터 45 범위를 벗어나면 예외가 발생한다.", () => {
      expect(() => {
        LottoValidator.validateBonusNumber(0, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);

      expect(() => {
        LottoValidator.validateBonusNumber(46, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
    });

    test("올바른 보너스 번호를 입력한 경우 예외가 발생하지 않는다.", () => {
      expect(() => {
        LottoValidator.validateBonusNumber(7, [1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });
});

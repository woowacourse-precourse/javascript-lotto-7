import { ERROR_MESSAGE } from "../src/constants";
import Lotto from "../src/Lotto";
import LottoController from "../src/LottoController";

describe("LottoController 클래스 테스트", () => {
  let controller;

  beforeEach(() => {
    controller = new LottoController();
  });

  describe("validatePurchaseAmount", () => {
    test("구입 금액이 1000원 미만이면 예외가 발생한다.", () => {
      expect(() => {
        controller.validatePurchaseAmount(500);
      }).toThrow(ERROR_MESSAGE.UNDER_PRICE);
    });

    test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
      expect(() => {
        controller.validatePurchaseAmount(1500);
      }).toThrow(ERROR_MESSAGE.NOT_PRICE);
    });

    test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        controller.validatePurchaseAmount("abc");
      }).toThrow(ERROR_MESSAGE.NOT_NUMBER_PRICE);
    });

    test("구입 금액이 유효하면 정상적으로 통과된다.", () => {
      expect(() => {
        controller.validatePurchaseAmount(3000);
      }).not.toThrow();
    });
  });

  describe("validateWinningNumbers", () => {
    test("당첨 번호가 6개가 아니면 예외가 발생한다.", () => {
      expect(() => {
        controller.validateWinningNumbers([1, 2, 3, 4, 5]);
      }).toThrow(ERROR_MESSAGE.OVER_LENGTH_WINNING_NUMBER);
    });

    test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        controller.validateWinningNumbers([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
    });

    test("당첨 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
      expect(() => {
        controller.validateWinningNumbers([0, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGE.NOT_WINNING_NUMBER_RANGE);

      expect(() => {
        controller.validateWinningNumbers([1, 2, 3, 4, 5, 46]);
      }).toThrow(ERROR_MESSAGE.NOT_WINNING_NUMBER_RANGE);
    });

    test("당첨 번호가 유효하면 정상적으로 통과된다.", () => {
      expect(() => {
        controller.validateWinningNumbers([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });

  describe("validateBonusNumber", () => {
    test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
      expect(() => {
        controller.validateBonusNumber([1, 2, 3, 4, 5, 6], 6);
      }).toThrow(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    });

    test("보너스 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
      expect(() => {
        controller.validateBonusNumber([1, 2, 3, 4, 5, 6], 0);
      }).toThrow(ERROR_MESSAGE.NOT_BONUS_NUMBER_RANGE);

      expect(() => {
        controller.validateBonusNumber([1, 2, 3, 4, 5, 6], 46);
      }).toThrow(ERROR_MESSAGE.NOT_BONUS_NUMBER_RANGE);
    });

    test("보너스 번호가 유효하면 정상적으로 통과된다.", () => {
      expect(() => {
        controller.validateBonusNumber([1, 2, 3, 4, 5, 6], 7);
      }).not.toThrow();
    });
  });

  describe("countOfLotto", () => {
    test("구입 금액에 따라 구매할 수 있는 로또 개수가 올바르게 계산된다.", () => {
      expect(controller.countOfLotto(3000)).toBe(3);
      expect(controller.countOfLotto(4500)).toBe(4); // 1000원 단위가 아니면 잔액으로 계산되지 않음
    });
  });

  describe("calculateResults", () => {
    test("로또 당첨 결과가 올바르게 계산된다.", () => {
      controller.lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]), // 6개 일치
        new Lotto([1, 2, 3, 4, 5, 7]), // 5개 + 보너스 번호 일치
        new Lotto([1, 2, 3, 4, 5, 8]), // 5개 일치
        new Lotto([1, 2, 3, 4, 9, 10]), // 4개 일치
        new Lotto([1, 2, 3, 11, 12, 13]), // 3개 일치
      ];
      const results = controller.calculateResults([1, 2, 3, 4, 5, 6], 7);
      expect(results).toEqual({
        1: 1, // 6개 일치 1개
        2: 1, // 5개 + 보너스 1개
        3: 1, // 5개 일치 1개
        4: 1, // 4개 일치 1개
        5: 1, // 3개 일치 1개
      });
    });
  });
});

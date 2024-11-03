import LottoApp from "../src/LottoApp";
import {
  ERROR_MESSAGES,
  LOTTO_PRICE,
  LOTTO_NUMBERS,
} from "../src/constants.js";

describe("LottoApp 클래스 테스트", () => {
  let lottoApp;

  beforeEach(() => {
    lottoApp = new LottoApp();
  });

  test("구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.validateAmount(1500);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 0 이하인 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.validateAmount(0);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      lottoApp.validateAmount(-1000);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.validateAmount("abc");
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      lottoApp.validateAmount(null);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 유효한 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      lottoApp.validateAmount(1000);
    }).not.toThrow();

    expect(() => {
      lottoApp.validateAmount(2000);
    }).not.toThrow();
  });

  test("구입 금액에 따른 로또 개수가 정확히 계산된다.", () => {
    const amount = LOTTO_PRICE * 5;
    const count = Math.floor(amount / LOTTO_PRICE);
    expect(count).toBe(5);
  });

  test("로또 번호가 1에서 45 사이의 6개 숫자로 중복 없이 생성된다.", () => {
    const numbers = lottoApp.generateLottoNumbers();
    expect(numbers).toHaveLength(LOTTO_NUMBERS.COUNT);
    expect(new Set(numbers).size).toBe(LOTTO_NUMBERS.COUNT);
    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(LOTTO_NUMBERS.MIN);
      expect(num).toBeLessThanOrEqual(LOTTO_NUMBERS.MAX);
    });
  });

  test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.checkBonusNumberType("a");
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE);
  });

  test("보너스 번호가 유효한 범위를 벗어날 경우 예외가 발생한다.", () => {
    expect(() => {
      lottoApp.checkBonusNumberRange(0);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);

    expect(() => {
      lottoApp.checkBonusNumberRange(46);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
  });

  test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      lottoApp.checkBonusNumberDuplication(3, winningNumbers);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  });

  test("보너스 번호가 1에서 45 사이의 유효한 번호이고 당첨 번호와 중복되지 않으면 예외가 발생하지 않는다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      lottoApp.validateBonusNumber(7, winningNumbers);
    }).not.toThrow();
  });
});

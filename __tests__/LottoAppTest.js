import Lotto from "../src/Lotto.js";
import LottoApp from "../src/LottoApp";
import {
  ERROR_MESSAGES,
  LOTTO_PRICE,
  LOTTO_NUMBERS,
  WINNING_PRIZES,
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

describe("LottoApp 통계 계산 테스트", () => {
  let lottoApp;
  let winningLotto;

  beforeEach(() => {
    lottoApp = new LottoApp();
    winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lottoApp.statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  });

  test("로또 번호와 당첨 번호가 몇 개 일치하는지 계산한다", () => {
    const lotto = new Lotto([1, 2, 7, 8, 9, 10]);
    const matchCount = lottoApp.countMatches(lotto, winningLotto);
    expect(matchCount).toBe(2);
  });

  test("일치하는 번호와 보너스 포함 여부를 확인한다", () => {
    const lotto = new Lotto([1, 2, 3, 4, 7, 8]);
    const bonusNumber = 7;
    const result = lottoApp.getMatchResult(lotto, winningLotto, bonusNumber);

    expect(result.matchCount).toBe(4);
    expect(result.hasBonus).toBe(true);
  });

  test("일치하는 번호와 보너스 여부에 따라 통계를 업데이트한다", () => {
    lottoApp.updateStatistics(6, false);
    lottoApp.updateStatistics(5, true);
    lottoApp.updateStatistics(5, false);
    lottoApp.updateStatistics(4, false);
    lottoApp.updateStatistics(3, false);

    expect(lottoApp.statistics.first).toBe(1);
    expect(lottoApp.statistics.second).toBe(1);
    expect(lottoApp.statistics.third).toBe(1);
    expect(lottoApp.statistics.fourth).toBe(1);
    expect(lottoApp.statistics.fifth).toBe(1);
  });

  test("로또 목록을 기반으로 통계 계산을 수행한다", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 10, 11]),
      new Lotto([1, 2, 3, 12, 13, 14]),
      new Lotto([21, 22, 23, 24, 25, 26]),
    ];
    const bonusNumber = 7;

    lottoApp.calculateStatistics(lottos, winningLotto, bonusNumber);

    expect(lottoApp.statistics.first).toBe(1);
    expect(lottoApp.statistics.second).toBe(1);
    expect(lottoApp.statistics.third).toBe(1);
    expect(lottoApp.statistics.fourth).toBe(1);
    expect(lottoApp.statistics.fifth).toBe(1);
  });

  test("현재까지 계산된 통계를 반환한다", () => {
    lottoApp.updateStatistics(6, false);
    lottoApp.updateStatistics(5, true);
    const statistics = lottoApp.getStatistics();

    expect(statistics).toEqual({
      first: 1,
      second: 1,
      third: 0,
      fourth: 0,
      fifth: 0,
    });
  });
});

describe("LottoApp 수익률 계산 테스트", () => {
  let lottoApp;

  beforeEach(() => {
    lottoApp = new LottoApp();
    lottoApp.statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  });

  test("총 당첨 금액 계산이 정확히 이루어진다", () => {
    lottoApp.statistics = {
      first: 1,
      second: 2,
      third: 0,
      fourth: 3,
      fifth: 4,
    };
    const totalPrize = lottoApp.calculateTotalPrize();
    const expectedTotalPrize =
      1 * WINNING_PRIZES.first +
      2 * WINNING_PRIZES.second +
      0 * WINNING_PRIZES.third +
      3 * WINNING_PRIZES.fourth +
      4 * WINNING_PRIZES.fifth;

    expect(totalPrize).toBe(expectedTotalPrize);
  });

  test("수익률 계산이 정확히 이루어진다", () => {
    lottoApp.statistics = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    const purchaseAmount = 5000;
    const profitRate = lottoApp.calculateProfitRate(purchaseAmount);
    const expectedProfitRate = (WINNING_PRIZES.first / purchaseAmount) * 100;

    expect(profitRate).toBeCloseTo(expectedProfitRate, 2);
  });
});

import Lotto from "../src/Lotto";
import MoneyValidator from "../src/MoneyValidator.js";
import LottoGenerator from "../src/LottoGenerator.js";
import lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  const lotto = new Lotto();
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateWinningNumber([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const lotto = new Lotto();
    expect(() => {
      lotto.validateWinningNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    const lotto = new Lotto();
    expect(() => {
      lotto.validateWinningNumber([1, 2, 3, 4, 5, "d"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정해진 범위 내에 없을 경우 예외가 발생한다.", () => {
    const lotto = new Lotto();
    expect(() => {
      lotto.validateWinningNumber([1, 2, 3, 4, 5, 80]);
    }).toThrow("[ERROR]");
  });

  test("추가 당첨 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    const lotto = new Lotto();
    expect(() => {
      lotto.validateAdditionalNumber("d");
    }).toThrow("[ERROR]");
  });

  test("추가 당첨 번호가 정해진 범위 내에 없을 경우 예외가 발생한다.", () => {
    const lotto = new Lotto();
    expect(() => {
      lotto.validateAdditionalNumber(80);
    }).toThrow("[ERROR]");
  });
}),
  describe("moneyValidator 클래스 테스트", () => {
    test("구매 금액이 1000 단위가 아닐 경우 예외가 발생한다.", () => {
      expect(() => {
        new MoneyValidator(13987);
      }).toThrow("[ERROR]");
    });

    test("구매 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
      expect(() => {
        new MoneyValidator("dd");
      }).toThrow("[ERROR]");
    });

    test("추가 당첨 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
      expect(() => {
        new MoneyValidator("dd");
      }).toThrow("[ERROR]");
    });
  }),
  describe("lottoGenerator 클래스 테스트", () => {
    test("금액 입력 시, 구매한 복권들을 출력한다.", () => {
      const lottoGenerator = new LottoGenerator(3000);
      const lottos = lottoGenerator.getLottos();

      expect(lottos).toHaveLength(3),
        lottos.forEach(lotto => {
          expect(lotto).toHaveLength(6);
          lotto.forEach(number => {
            expect(number).toBeGreaterThanOrEqual(1);
            expect(number).toBeLessThanOrEqual(45);
          });
        });
    });
  });

import App from "../src/App";
import Lotto from "../src/Lotto";

describe("단위 기능 테스트", () => {
    let app;
  
    beforeEach(() => {
      app = new App();
    });
  
    test("금액에 맞는 개수의 로또를 발행한다.", () => {
      const lottos = app.purchaseLottos(8000);
      expect(lottos).toHaveLength(8);
    });
  
    test("발행된 로또 번호는 중복을 허용하지 않으며 1부터 45 사이의 숫자여야 한다.", () => {
      const lottos = app.purchaseLottos(1000);
      lottos.forEach((lotto) => {
        const numbers = lotto.getNumbers();
        expect(new Set(numbers).size).toBe(6);
        numbers.forEach((num) => {
          expect(num).toBeGreaterThanOrEqual(1);
          expect(num).toBeLessThanOrEqual(45);
        });
      });
    });
  
    test("로또 번호와 당첨 번호를 비교하여 당첨 등수를 산출한다.", () => {
      const lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([1, 2, 3, 4, 5, 7]),
        new Lotto([1, 2, 3, 4, 5, 8]),
        new Lotto([1, 2, 3, 4, 10, 11]),
        new Lotto([1, 2, 3, 10, 11, 12]),
      ];
      const winNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const results = app.countResults(lottos, winNumbers, bonusNumber);
  
      expect(results[6]).toBe(1);
      expect(results[15]).toBe(1);
      expect(results[5]).toBe(1);
      expect(results[4]).toBe(1);
      expect(results[3]).toBe(1);
    });
  
    test("수익률이 소수점 둘째 자리에서 반올림되어 출력된다.", () => {
      const results = { 3: 1, 4: 0, 5: 0, 15: 1, 6: 0 };
      const profitRate = app.calculateProfit(results, 8000);
      expect(profitRate).toBe("375062.5");
    });
  });

  describe("예외 처리 테스트", () => {
    let app;
  
    beforeEach(() => {
      app = new App();
    });
  
    test("로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
      expect(() => app.purchaseLottos(1234)).toThrow("[ERROR]");
    });
  
    test("로또 구입 금액이 양의 정수가 아니면 예외가 발생한다.", () => {
      expect(() => app.purchaseLottos(-8000)).toThrow("[ERROR]");
      expect(() => app.purchaseLottos(0)).toThrow("[ERROR]");
      expect(() => app.purchaseLottos("1000j")).toThrow("[ERROR]");
    });
  
    test("당첨 번호가 (,)쉼표로 구분된 6개의 숫자가 아닌 경우 예외가 발생한다.", () => {
      expect(() => app.parseWinInput("1,2,3,4,5")).toThrow("[ERROR]");
      expect(() => app.parseWinInput("1,2,3,4,5,6,7")).toThrow("[ERROR]");
    });
  
    test("당첨 번호에 중복된 숫자가 포함된 경우 예외가 발생한다.", () => {
      expect(() => app.parseWinInput("1,2,3,4,5,5")).toThrow("[ERROR]");
    });
  
    test("당첨 번호가 양의 정수가 아닌 경우 예외가 발생한다.", () => {
      expect(() => app.parseWinInput("1,2,3,4,5,a")).toThrow("[ERROR]");
    });
  
    test("당첨 번호가 1부터 45 사이의 숫자가 아닌 경우 예외가 발생한다.", () => {
      expect(() => app.parseWinInput("0,2,3,4,5,6")).toThrow("[ERROR]");
      expect(() => app.parseWinInput("1,2,3,4,5,46")).toThrow("[ERROR]");
    });
  
    test("보너스 번호가 1부터 45 사이의 숫자가 아닌 경우 예외가 발생한다.", () => {
      expect(() => app.validateBonusNumber(0, [1, 2, 3, 4, 5, 6])).toThrow("[ERROR]");
      expect(() => app.validateBonusNumber(46, [1, 2, 3, 4, 5, 6])).toThrow("[ERROR]");
    });
  
    test("보너스 번호가 당첨 번호와 중복되는 경우 예외가 발생한다.", () => {
      expect(() => app.validateBonusNumber(6, [1, 2, 3, 4, 5, 6])).toThrow("[ERROR]");
    });
  });
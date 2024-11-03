import LottoMachine from "../src/models/LottoMachine.js";

describe("로또 생성기 테스트", () => {
  test("구입 금액에 해당하는 만큼의 로또를 생성한다", () => {
    const lottos = LottoMachine.generateLottos(5000);
    expect(lottos).toHaveLength(5);
  });

  test("생성된 로또 번호는 오름차순으로 정렬되어 있다", () => {
    const lottos = LottoMachine.generateLottos(1000);
    const numbers = lottos[0].getNumbers();
    expect(numbers).toEqual([...numbers].sort((a, b) => a - b));
  });

  test("생성된 모든 로또의 번호는 유효해야 한다", () => {
    const lottos = LottoMachine.generateLottos(3000);

    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();

      expect(numbers).toHaveLength(6);

      numbers.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(45);
      });

      expect(new Set(numbers).size).toBe(6);
    });
  });
});

import LottoResultCalculator from "../src/LottoResultCalculator";
import Lotto from "../src/Lotto";

describe("LottoResultCalculator 클래스 테스트", () => {
  test("로또 결과 계산 테스트", () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([8, 9, 10, 11, 12, 13])
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const calculator = new LottoResultCalculator(tickets, winningNumbers, bonusNumber);
    const results = calculator.lottoCalculateResults();

    expect(results[6]).toBe(1); // 6개 일치
    expect(results[5.5]).toBe(1); // 5개 + 보너스 번호 일치
    expect(results[3]).toBe(0); // 3개 일치 없음
  });
});
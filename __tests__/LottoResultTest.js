import LottoResult from "../src/domain/LottoResult.js";
import Lotto from "../src/domain/Lotto.js";
import LottoWinner from "../src/domain/LottoWinner.js";

describe("LottoResult 클래스 테스트", () => {
  test("당첨 결과 계산 테스트", () => {
    // given
    const lottoList = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7])
    ];
    const lottoWinner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);

    // when
    const result = new LottoResult(lottoList, lottoWinner);
    const matchResult = result.getResult();

    // then
    expect(matchResult[1]).toBe(1);
    expect(matchResult[2]).toBe(1);
  });

  test("수익률 계산 테스트 - 1등인 경우", () => {
    // given
    const lottoList = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winner = new LottoWinner([1, 2, 3, 4, 5, 6], 7);

    // when
    const result = new LottoResult(lottoList, winner);
    const rateOfReturn = result.calculateResult();

    // then
    expect(rateOfReturn).toBe("200000000.0");
  });
  
  test("수익률 계산 테스트 - 로또가 전부 틀린 경우", () => {
    // given
    const lottoList = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winner = new LottoWinner([11, 12, 13, 14, 15, 16], 7);

    // when
    const result = new LottoResult(lottoList, winner);
    const rateOfReturn = result.calculateResult();

    // then
    expect(rateOfReturn).toBe("0.0");
  });
});

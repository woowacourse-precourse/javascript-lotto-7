import LottoGame from '../src/models/LottoGame.js';

describe('로또 게임 테스트', () => {
  describe('당첨 번호 매칭', () => {
    test('당첨 번호와 일치하는 개수를 정확히 계산한다', () => {
      // Given
      const myNumbers = [1, 2, 3, 4, 5, 6];
      const winningNumbers = [1, 2, 3, 7, 8, 9];

      // When
      const matchCount = LottoGame.getMatchNumber(myNumbers, winningNumbers);

      // Then
      expect(matchCount).toBe(3);
    });

    test('당첨 번호와 일치하는 번호가 하나도 없으면 0을 반환한다', () => {
      // Given
      const myNumbers = [1, 2, 3, 4, 5, 6];
      const winningNumbers = [7, 8, 9, 10, 11, 12];

      // When
      const matchCount = LottoGame.getMatchNumber(myNumbers, winningNumbers);

      // Then
      expect(matchCount).toBe(0);
    });
  });

  describe('당첨금 계산', () => {
    test('각 순위별 당첨금을 정확히 계산한다', () => {
      // Given
      const winStatistics = {
        3: 1, // 5,000원
        4: 1, // 50,000원
        5: 1, // 1,500,000원
        6: 0,
        bonus: 1, // 30,000,000원
      };

      // When
      const totalPrize = LottoGame.getGetCash(winStatistics);

      // Then
      const expectedPrize = 5000 + 50000 + 1500000 + 30000000;
      expect(totalPrize).toBe(expectedPrize);
    });

    test('당첨된 번호가 없으면 당첨금은 0원이다', () => {
      // Given
      const winStatistics = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };

      // When
      const totalPrize = LottoGame.getGetCash(winStatistics);

      // Then
      expect(totalPrize).toBe(0);
    });
  });

  describe('수익률 계산', () => {
    test('구매 금액과 당첨금으로 수익률을 정확히 계산한다', () => {
      // Given
      const purchaseAmount = 1000;
      const prizeAmount = 5000;

      // When
      const rateOfReturn = LottoGame.getRateOfReturn(
        purchaseAmount,
        prizeAmount,
      );

      // Then
      expect(rateOfReturn).toBe('500.0');
    });

    test('당첨금이 0원이면 수익률은 0이다', () => {
      // Given
      const purchaseAmount = 1000;
      const prizeAmount = 0;

      // When
      const rateOfReturn = LottoGame.getRateOfReturn(
        purchaseAmount,
        prizeAmount,
      );

      // Then
      expect(rateOfReturn).toBe(0);
    });
  });

  describe('전체 당첨 통계', () => {
    test('여러 장의 로또에 대한 당첨 통계를 정확히 계산한다', () => {
      // Given
      const lottos = {
        0: [1, 2, 3, 4, 5, 6],
        1: [4, 5, 6, 7, 8, 9],
      };
      const winningNumbers = [1, 2, 3, 7, 8, 9];
      const bonusNumber = 6;

      // When
      const statistics = LottoGame.getAllNumberWon(
        lottos,
        winningNumbers,
        bonusNumber,
      );

      // Then
      expect(statistics[3]).toBe(2); // 3개 일치가 2회
      expect(statistics.bonus).toBe(0); // 보너스 번호 일치 없음
    });

    test('5개 일치와 보너스 번호가 일치하는 경우를 정확히 계산한다', () => {
      // Given
      const lottos = {
        0: [1, 2, 3, 4, 5, 7], // 5개 일치 + 보너스
      };
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      // When
      const statistics = LottoGame.getAllNumberWon(
        lottos,
        winningNumbers,
        bonusNumber,
      );

      // Then
      expect(statistics[5]).toBe(0); // 5개 일치는 보너스로 카운트되어 0
      expect(statistics.bonus).toBe(1); // 보너스 번호 일치 1회
    });
  });
});

import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../src/LottoGame';
import Lotto from '../src/Lotto';

describe('로또게임 클래스 테스트', () => {
  const QUANTITY = 3;

  test('로또 구매 내역 출력 테스트', () => {
    const lottoGame = new LottoGame(QUANTITY);
    jest.spyOn(Console, 'print');

    lottoGame.displayLottos();

    expect(Console.print).toHaveBeenCalledWith(
      `\n${QUANTITY}개를 구매했습니다.`
    );
    expect(Console.print).toHaveBeenCalledTimes(QUANTITY + 1);
  });

  describe('당첨 번호 검증 테스트', () => {
    test('당첨 번호가 6개가 아닐 경우 에러가 발생한다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      const invalidNumbers = [1, 2, 3, 4, 5];

      expect(() => {
        lottoGame.validateWinningNumbers(invalidNumbers);
      }).toThrow('[ERROR] 당첨 번호는 6개의 서로 다른 숫자여야 합니다.');
    });

    test('당첨 번호에 중복된 숫자가 있을 경우 에러가 발생한다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      const invalidNumbers = [1, 2, 3, 4, 5, 5];

      expect(() => {
        lottoGame.validateWinningNumbers(invalidNumbers);
      }).toThrow('[ERROR] 당첨 번호는 6개의 서로 다른 숫자여야 합니다.');
    });

    test('당첨 번호가 1-45 범위를 벗어날 경우 에러가 발생한다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      const invalidNumbers = [1, 2, 3, 4, 5, 46];

      expect(() => {
        lottoGame.validateWinningNumbers(invalidNumbers);
      }).toThrow('[ERROR] 당첨 번호 입력이 잘못되었습니다.');
    });
  });

  describe('보너스 번호 검증 테스트', () => {
    test('보너스 번호가 당첨 번호와 중복될 경우 에러가 발생한다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      lottoGame.winningNumbers = [1, 2, 3, 4, 5, 6];

      expect(() => {
        lottoGame.validateBonusNumber(1);
      }).toThrow('[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.');
    });

    test('보너스 번호가 숫자가 아닐 경우 에러가 발생한다', () => {
      const lottoGame = new LottoGame(QUANTITY);

      expect(() => {
        lottoGame.validateBonusNumber(NaN);
      }).toThrow('[ERROR] 보너스 번호 입력이 잘못되었습니다.');
    });
  });

  describe('당첨 결과 계산 테스트', () => {
    test('당첨 결과가 정확히 기록된다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      // 테스트용 당첨 번호 설정
      lottoGame.winningNumbers = [1, 2, 3, 4, 5, 6];
      lottoGame.bonusNumber = 7;

      // 테스트용 로또 번호 설정
      lottoGame.lottos = [
        new Lotto([1, 2, 3, 7, 8, 9]),
        new Lotto([1, 2, 3, 4, 5, 7]),
        new Lotto([1, 2, 3, 4, 5, 6]),
      ];

      lottoGame.calculateWinningResults();

      expect(lottoGame.result['5th place']).toBe(1);
      expect(lottoGame.result['2nd place']).toBe(1);
      expect(lottoGame.result['1st place']).toBe(1);
    });
  });

  describe('수익률 계산 테스트', () => {
    test('수익률이 정확히 계산된다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      lottoGame.result = {
        '5th place': 1,
        '4th place': 1,
        '3rd place': 0,
        '2nd place': 0,
        '1st place': 0,
      };

      const profitRate = lottoGame.calculateProfitRate();
      expect(profitRate).toBe(1833.3);
    });

    test('소수점 둘째 자리에서 반올림이 정확히 된다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      lottoGame.result = {
        '5th place': 1,
        '4th place': 0,
        '3rd place': 0,
        '2nd place': 0,
        '1st place': 0,
      };

      const profitRate = lottoGame.calculateProfitRate();
      expect(profitRate).toBe(166.7);
    });

    test('당첨금 총액이 정확히 계산된다', () => {
      const lottoGame = new LottoGame(QUANTITY);
      lottoGame.result = {
        '5th place': 1,
        '4th place': 1,
        '3rd place': 1,
        '2nd place': 1,
        '1st place': 1,
      };

      const totalAmount = lottoGame.calculateWinningAmount();
      expect(totalAmount).toBe(2031555000);
    });
  });
});

import WinningLotto from '../src/Model/WinningLotto.js';

describe('WinningLotto 클래스 테스트', () => {
  describe('validateWinningNumbers() 메서드 테스트', () => {
    test('유효한 당첨 번호를 입력하면 배열 형태로 반환한다.', () => {
      const winningNumbers = '3,1,4,2,6,5';
      const validNumbers = WinningLotto.validateWinningNumbers(winningNumbers);

      expect(validNumbers).toEqual([3, 1, 4, 2, 6, 5]);
    });

    test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      const winningNumbers = '1,2,3,4,5,5';

      expect(() => WinningLotto.validateWinningNumbers(winningNumbers)).toThrow(
        '[ERROR]',
      );
    });

    test('당첨 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      const winningNumbers = '1,2,3,4,5,46';

      expect(() => WinningLotto.validateWinningNumbers(winningNumbers)).toThrow(
        '[ERROR]',
      );
    });
  });

  describe('validateBonusNumber() 메서드 테스트', () => {
    test('유효한 보너스 번호를 입력하면 숫자 형태로 반환한다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = '7';
      const validBonusNumber = WinningLotto.validateBonusNumber(
        winningNumbers,
        bonusNumber,
      );

      expect(validBonusNumber).toBe(7);
    });

    test('보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = '46';

      expect(() =>
        WinningLotto.validateBonusNumber(winningNumbers, bonusNumber),
      ).toThrow('[ERROR]');
    });

    test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = '6';

      expect(() =>
        WinningLotto.validateBonusNumber(winningNumbers, bonusNumber),
      ).toThrow('[ERROR]');
    });
  });

  describe('calculateRank() 메서드 테스트', () => {
    let winningLotto;

    beforeEach(() => {
      const winningNumbers = '1,2,3,4,5,6';
      const bonusNumber = '7';
      winningLotto = new WinningLotto();
      winningLotto.setWinningNumbers(winningNumbers);
      winningLotto.setBonusNumber(bonusNumber);
    });

    test('6개 번호가 일치하면 1등을 반환한다.', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const rank = winningLotto.calculateRank(lottoNumbers);

      expect(rank).toBe(1);
    });

    test('5개 번호와 보너스 번호가 일치하면 2등을 반환한다.', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 7];
      const rank = winningLotto.calculateRank(lottoNumbers);

      expect(rank).toBe(2);
    });

    test('5개 번호가 일치하면 3등을 반환한다.', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 8];
      const rank = winningLotto.calculateRank(lottoNumbers);

      expect(rank).toBe(3);
    });

    test('4개 번호가 일치하면 4등을 반환한다.', () => {
      const lottoNumbers = [1, 2, 3, 4, 8, 9];
      const rank = winningLotto.calculateRank(lottoNumbers);

      expect(rank).toBe(4);
    });

    test('3개 번호가 일치하면 5등을 반환한다.', () => {
      const lottoNumbers = [1, 2, 3, 8, 9, 10];
      const rank = winningLotto.calculateRank(lottoNumbers);

      expect(rank).toBe(5);
    });

    test('3개 미만의 번호가 일치하면 null을 반환한다.', () => {
      const lottoNumbers = [1, 2, 8, 9, 10, 11];
      const rank = winningLotto.calculateRank(lottoNumbers);

      expect(rank).toBeNull();
    });
  });
});

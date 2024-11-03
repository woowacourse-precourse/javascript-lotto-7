import WinningLotto from '../src/Model/WinningLotto.js';

describe('WinningLotto 클래스 테스트', () => {
  describe('validateWinningNumbers 메서드 테스트', () => {
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
});

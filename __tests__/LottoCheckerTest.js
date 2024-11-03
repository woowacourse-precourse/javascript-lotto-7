import LottoChecker from '../src/classes/LottoChecker.js';
import Lotto from '../src/classes/Lotto.js';
import ERROR_MESSAGES from '../src/utills/errors.js';

describe('LottoChecker 클래스 테스트', () => {
    
  // 예외 테스트
  test('로또 목록이 비어 있으면 예외가 발생한다.', () => {
    expect(() => {
      LottoChecker.checkWinningLottos([], new Lotto([1, 2, 3, 4, 5, 6]), 7);
    }).toThrow(ERROR_MESSAGES.LOTTOS.EMPTY_ARRAY);
  });

  test('로또 목록에 Lotto 인스턴스가 아닌 객체가 포함되면 예외가 발생한다.', () => {
    expect(() => {
      LottoChecker.checkWinningLottos(
        [1, 2, 3, 4, 5, 6],
        new Lotto([1, 2, 3, 4, 5, 6]),
        7
      );
    }).toThrow(ERROR_MESSAGES.LOTTOS.INVALID_INSTANCE);
  });

  test('당첨 번호가 비어 있으면 예외가 발생한다.', () => {
    expect(() => {
      LottoChecker.checkWinningLottos([new Lotto([1, 2, 3, 4, 5, 6])], null, 7);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBERS.EMPTY_WINNING_NUMBERS);
  });

  test('당첨 번호가 Lotto 인스턴스가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoChecker.checkWinningLottos(
        [new Lotto([1, 2, 3, 4, 5, 6])],
        [1, 2, 3, 4, 5, 6],
        7
      );
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBERS.INVALID_INSTANCE);
  });

  // 정상 케이스: 당첨 결과 계산 (등수에 따른 개수 확인)
  test('당첨 결과가 정확하게 계산된다.', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 1등
      new Lotto([1, 2, 3, 4, 5, 7]), // 2등 (5개 일치 + 보너스 번호 일치)
      new Lotto([1, 2, 3, 4, 5, 8]), // 3등 (5개 일치)
      new Lotto([1, 2, 3, 4, 10, 11]), // 4등 (4개 일치)
      new Lotto([1, 2, 3, 12, 13, 14]), // 5등 (3개 일치)
      new Lotto([20, 21, 22, 23, 24, 25]), // 미당첨
    ];
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    const result = LottoChecker.checkWinningLottos(
      lottos,
      winningNumbers,
      bonusNumber
    );

    expect(result[0]).toBe(1); // 1등
    expect(result[1]).toBe(1); // 2등
    expect(result[2]).toBe(1); // 3등
    expect(result[3]).toBe(1); // 4등
    expect(result[4]).toBe(1); // 5등
  });
});

import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복되지 않은 숫자로 입력해야 합니다.');
  });

  test('로또 번호에 1 ~ 45 사이의 숫자가 아닌 경우 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('checkWinningNumbers 메서드는 lottoNumbers와 일치하는 번호를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [1, 2, 7, 8, 9, 10];
    const winningNumbers = lotto.checkWinningNumbers(lottoNumbers);
    expect(winningNumbers).toEqual([1, 2]);
  });

  test('checkWinningNumbers 메서드는 lottoNumbers와 일치하는 번호가 없을 경우 빈 배열을 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [7, 8, 9, 10, 11, 12];
    const winningNumbers = lotto.checkWinningNumbers(lottoNumbers);
    expect(winningNumbers).toEqual([]);
  });
});

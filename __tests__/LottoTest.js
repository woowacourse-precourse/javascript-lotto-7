import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

describe('매치 계산 기능 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('6개 매치 시, 6 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(6);
  });

  test('5개 매치 시, 5 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 10];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(5);
  });

  test('4개 매치 시, 4 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 9, 10];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(4);
  });

  test('3개 매치 시, 3 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 8, 9, 10];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(3);
  });

  test('2개 매치 시, 2 반환 검사', () => {
    const winningNumbers = [1, 2, 7, 8, 9, 10];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(2);
  });

  test('1개 매치 시, 1 반환 검사', () => {
    const winningNumbers = [1, 11, 7, 8, 9, 10];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(1);
  });

  test('0개 매치 시, 0 반환 검사', () => {
    const winningNumbers = [12, 11, 7, 8, 9, 10];
    expect(lotto.calculateWinningLotto(winningNumbers)).toEqual(0);
  });
});

describe('등수 계산 기능 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('6개 매치 시, 1등 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '1'
    );
  });

  test('5개 매치 보너스 매치 시, 2등 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '2'
    );
  });

  test('5개 매치 시, 3등 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 8];
    const bonusNumber = 7;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '3'
    );
  });

  test('4개 매치 시, 4등 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 8, 9];
    const bonusNumber = 10;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '4'
    );
  });

  test('3개 매치 시, 5등 반환 검사', () => {
    const winningNumbers = [1, 2, 3, 8, 9, 10];
    const bonusNumber = 11;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '5'
    );
  });

  test('2개 매치 시, 0등 반환 검사', () => {
    const winningNumbers = [1, 2, 7, 8, 9, 10];
    const bonusNumber = 11;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '0'
    );
  });

  test('1개 매치 시, 0등 반환 검사', () => {
    const winningNumbers = [1, 12, 7, 8, 9, 10];
    const bonusNumber = 11;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '0'
    );
  });

  test('0개 매치 시, 0등 반환 검사', () => {
    const winningNumbers = [12, 13, 7, 8, 9, 10];
    const bonusNumber = 11;

    expect(lotto.calculateLottoResult(winningNumbers, bonusNumber)).toEqual(
      '0'
    );
  });
});

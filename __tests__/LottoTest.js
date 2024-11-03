import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  const createLotto = numbers => () => new Lotto(numbers);

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(createLotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
      '[ERROR] 로또 번호는 6개여야 합니다.',
    );
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(createLotto([1, 2, 3, 4, 5, 5])).toThrow(
      '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
    );
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(createLotto([1, 2, 'a', 4, 5, 6])).toThrow(
      '[ERROR] 로또 번호는 숫자여야 합니다.',
    );
  });

  test('로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(createLotto([1, 2, 3.5, 4, 5, 6])).toThrow(
      '[ERROR] 로또 번호는 정수여야 합니다.',
    );
  });

  test.each([[[0, 2, 3, 4, 5, 6]], [[1, 2, 3, 4, 5, 46]]])(
    '로또 번호가 1과 45 사이의 숫자가 아니면 예외가 발생한다.',
    numbers => {
      expect(createLotto(numbers)).toThrow(
        '[ERROR] 로또 번호는 1과 45 사이여야 합니다.',
      );
    },
  );

  test('유효한 로또 번호 배열이 입력되면 예외가 발생하지 않는다.', () => {
    expect(createLotto([1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test('getNumbers 메서드가 올바른 로또 번호 배열을 반환한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toStrictEqual(numbers);
  });
});

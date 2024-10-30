// Validator.test.js

describe('Validator.validate', () => {
  test('로또 번호가 6개가 아니면 에러를 발생시킨다', () => {
    expect(() => Validator.validate([1, 2, 3, 4, 5])).toThrow(
      '[ERROR] 로또 번호는 6개여야 합니다.',
    );
  });

  test('로또 번호에 중복된 숫자가 있으면 에러를 발생시킨다', () => {
    expect(() => Validator.validate([1, 2, 3, 4, 5, 5])).toThrow(
      '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
    );
  });

  test('로또 번호가 1에서 45 범위를 벗어나면 에러를 발생시킨다', () => {
    expect(() => Validator.validate([0, 2, 3, 4, 5, 6])).toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    );
    expect(() => Validator.validate([1, 2, 3, 4, 5, 46])).toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    );
  });

  test('유효한 6개의 번호가 입력되면 에러가 발생하지 않는다', () => {
    expect(() => Validator.validate([1, 2, 3, 4, 5, 6])).not.toThrow();
    expect(() => Validator.validate([10, 20, 30, 40, 41, 42])).not.toThrow();
  });
});

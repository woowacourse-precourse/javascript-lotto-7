import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호가 올바른 범위(1~45) 내에 있는 6개의 고유 숫자로 구성된 경우, 예외가 발생하지 않는다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    })
      .not
      .toThrow();
  });

  const ERROR = '[ERROR]';

  describe('로또 번호 예외 처리 테스트', () => {
    test.each([
      {
        description: '로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.',
        input: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        description: '로또 번호 배열이 비어 있는 경우 예외가 발생한다.',
        input: [],
      },
      {
        description: '로또 번호에 중복된 숫자가 있으면 예외가 발생한다.',
        input: [1, 2, 3, 4, 5, 5],
      },
      {
        description: '로또 번호의 개수가 6개가 안되면 예외가 발생한다.',
        input: [1, 2, 3, 4, 5],
      },
      {
        description: '로또 번호에 소수가 들어가면 예외가 발생한다.',
        input: [1, 2, 3, 4.2, 5, 6],
      },
      {
        description: '로또 번호에 0이 들어가면 예외가 발생한다.',
        input: [1, 2, 3, 0, 5, 6],
      },
      {
        description: '로또 번호가 45보다 큰 숫자가 있으면 예외가 발생한다.',
        input: [1, 2, 3, 4, 5, 46],
      },
      {
        description: '로또 번호에 음수가 들어가면 예외가 발생한다.',
        input: [1, 2, 3, -4, 5, 6],
      },
      {
        description: '로또 번호에 문자가 들어가면 예외가 발생한다.',
        input: [1, 2, 3, '10', 5, 6],
      },
      {
        description: '로또 번호에 공백이 들어가면 예외가 발생한다.',
        input: [1, 2, 3, , 5, 6],
      },
      {
        description: '로또 번호 배열에 null이 포함된 경우 예외가 발생한다.',
        input: [1, 2, 3, null, 5, 6],
      },
      {
        description:
          '로또 번호 배열에 undefined가 포함된 경우 예외가 발생한다.',
        input: [1, 2, 3, undefined, 5, 6],
      },
      {
        description: '로또 번호 배열에 NaN이 포함된 경우 예외가 발생한다.',
        input: [1, 2, NaN, 4, 5, 6],
      },
      {
        description: '로또 클래스에 정수가 들어가면 예외가 발생한다.',
        input: 1,
      },
      {
        description: '로또 클래스에 문자열이 들어가면 예외가 발생한다.',
        input: 'lotto',
      },
      {
        description: '로또 클래스에 객체가 들어가면 예외가 발생한다.',
        input: { lotto: 1 },
      },
      {
        description: '로또 클래스에 null이 들어가면 예외가 발생한다.',
        input: null,
      },
      {
        description: '로또 클래스에 undefined이 들어가면 예외가 발생한다.',
        input: undefined,
      },
    ])('$description', ({ input }) => {
      expect(() => {
        new Lotto(input);
      })
        .toThrow(ERROR);
    });
  });
});

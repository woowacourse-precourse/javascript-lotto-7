import Lotto from '../src/models/Lotto.js';

describe('로도 클래스 정상 테스트', () => {
  test('로또 번호가 6개가 맞으면 로또 객체가 생성된다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    expect(lotto.getNumbers()).toEqual(numbers);
  });
});

describe('로또 클래스 에러 테스트', () => {
  test.each([
    {
      description: '로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.',
      numbers: [1, 2, 3, 4, 5, 6, 7],
      expected: '[ERROR]'
    },
    {
      description: '로또 번호의 개수가 6개 미만이면 예외가 발생한다.',
      numbers: [1, 2, 3, 4, 5],
      expected: '[ERROR]'
    },
    {
      description: '로또 번호에 중복된 숫자가 있으면 예외가 발생한다.',
      numbers: [1, 2, 3, 4, 5, 5],
      expected: '[ERROR]'
    },
    {
      description: '로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.',
      numbers: [1, 2, 3, 4, 5, Number.NaN],
      expected: '[ERROR]'
    },
    {
      description: '로또 번호에 1이상 45이하가 아닌 값이 있으면 예외가 발생한다.',
      numbers: [1, 2, 3, 4, 5, 46],
      expected: '[ERROR]'
    }
  ])('$description', ({ numbers, expected }) => {
    expect(() => new Lotto(numbers)).toThrow(expected);
  });
});

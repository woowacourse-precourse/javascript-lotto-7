import Lotto from '../src/Lotto';
import errorMessages from '../src/constants/errorMessage';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(errorMessages.LOTTOS_LENGHT_ERROR);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(errorMessages.LOTTOS_DUPLICATE_ERROR);
  });

  test.each([
    {
      case: 'getNumbersWithSquareBrackets() 기본',
      numbers: [1, 2, 3, 4, 5, 6],
      expects: '[1, 2, 3, 4, 5, 6]',
    },
    {
      case: 'getNumbersWithSquareBrackets() 정렬 테스트',
      numbers: [1, 3, 2, 4, 5, 6],
      expects: '[1, 2, 3, 4, 5, 6]',
    },
  ])(
    'Lotto 단위 테스트\ncase : $case\nnumbers : $numbers\nexpects : $expects',
    ({ numbers, expects }) => {
      const lotto = new Lotto(numbers);
      expect(lotto.getNumbersWithSquareBrackets()).toStrictEqual(expects);
    }
  );
});

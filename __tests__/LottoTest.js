import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test.each([
    {
      numbers: [1, 2, 3, 4, 5, 5],
      errorMessage: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
    },
    {
      numbers: [0, 2, 3, 4, 5, 6],
      errorMessage: '[ERROR] 1~45의 숫자를 입력하셔야 됩니다.',
    },
    {
      numbers: [1, 2, 3, 4, 5, 46],
      errorMessage: '[ERROR] 1~45의 숫자를 입력하셔야 됩니다.',
    },
    {
      numbers: [1, 2, 3, 4, 5, 1.5],
      errorMessage: '[ERROR] 양의 정수만 입력하셔야 됩니다.',
    },
    {
      numbers: [1, 2, 3, 4, 5, -6],
      errorMessage: '[ERROR] 양의 정수만 입력하셔야 됩니다.',
    },
  ])(
    '유효하지 않은 로또 번호($numbers)로 생성 시 에러 메시지 출력',
    ({ numbers, errorMessage }) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(errorMessage);
    },
  );
});

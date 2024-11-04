import Lotto from '../../src/domain/Lotto';

describe('로또 클래스 테스트', () => {
  const MESSAGES = {
    empty: '[ERROR] 아무 것도 입력하지 않았습니다.',
    format: '[ERROR] 쉼표와 숫자를 제외한 다른 문자를 입력했습니다.',
    notInteger: '[ERROR] 정수를 입력하지 않았습니다.',
    duplications: '[ERROR] 중복되는 숫자가 있습니다.',
    range: '[ERROR] 1~45 이외의 숫자를 입력했습니다.',
    size: '[ERROR] 숫자를 6개 입력하지 않았습니다.',
  };

  test('빈 문자열이면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => new Lotto(INPUT)).toThrow(MESSAGES.empty);
  });

  test.each([
    ['-1,-2,-3,-4,-5,-6'],
    [','],
    [',1'],
    ['41,22,13,44,5,'],
    ['0.5'],
    ['1e1'],
    ['1;2;3;4;5;6'],
    ['1, 2, 3, 4, 5, 6'],
  ])(
    '숫자 사이에 쉼표와 숫자 이외의 문자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new Lotto(input)).toThrow(MESSAGES.format);
    },
  );

  test.each([['1'], ['1,2,3,4,5'], ['41,42,43,44,45']])(
    '숫자를 6개 입력하지 않으면 에러가 발생한다.',
    (input) => {
      expect(() => new Lotto(input)).toThrow(MESSAGES.size);
    },
  );

  test('중복되는 숫자를 입력하면 에러가 발생한다.', () => {
    // given
    const INPUT = '2,5,15,20,5,25';

    // then
    expect(() => new Lotto(INPUT)).toThrow(MESSAGES.duplications);
  });

  test('정수가 아닌 숫자를 입력하면 에러가 발생한다.', () => {
    // given
    const INPUT = '1,2,3,1000000000000000000000000,4,5';

    // then
    expect(() => new Lotto(INPUT)).toThrow(MESSAGES.notInteger);
  });

  test.each([['10,20,30,40,50,60'], ['0,1,2,3,4,5']])(
    '1~45 이외의 숫자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new Lotto(input)).toThrow(MESSAGES.range);
    },
  );

  test('유효성 검사에서 에러가 발생하지 않으면 숫자로 이루어진 배열이 오름차순으로 반환된다.', () => {
    // given
    const INPUT = '45,37,40,27,7,20';
    const OUTPUT = [7, 20, 27, 37, 40, 45];

    // when
    const winningNumbers = new Lotto(INPUT).getWinningNumbers();

    // then
    expect(winningNumbers).toEqual(OUTPUT);
  });
});

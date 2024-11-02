import BonusNumber from '../../src/domain/BonusNumber';

describe('보너스 번호 기능 테스트', () => {
  const MESSAGES = {
    empty: '[ERROR] 아무 것도 입력하지 않았습니다.',
    notNumber: '[ERROR] 숫자가 아닌 값을 입력했습니다.',
    notInteger: '[ERROR] 정수를 입력하지 않았습니다.',
    duplications: '[ERROR] 중복되는 숫자가 있습니다.',
    range: '[ERROR] 1~45 이외의 숫자를 입력했습니다.',
  };
  const WINNGS_NUMBERS = [1, 2, 3, 4, 5, 6];

  test('빈 문자열이면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => new BonusNumber(INPUT, WINNGS_NUMBERS)).toThrow(
      MESSAGES.empty,
    );
  });

  test.each([['1.2'], ['1e1'], ['log2(4)'], ['4/2'], ['5n']])(
    '숫자가 아닌 문자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new BonusNumber(input, WINNGS_NUMBERS)).toThrow(
        MESSAGES.notNumber,
      );
    },
  );

  test('정수가 아닌 숫자를 입력하면 에러가 발생한다.', () => {
    // given
    const INPUT = '5187436784627366822034345242047294720';

    // then
    expect(() => new BonusNumber(INPUT, WINNGS_NUMBERS)).toThrow(
      MESSAGES.notInteger,
    );
  });

  test.each([['46'], ['-1'], ['0']])(
    '1~45 이외의 숫자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new BonusNumber(input, WINNGS_NUMBERS)).toThrow(
        MESSAGES.range,
      );
    },
  );

  test.each([['1'], ['2'], ['3'], ['4'], ['5'], ['6']])(
    '당첨 번호와 중복되는 숫자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new BonusNumber(input, WINNGS_NUMBERS)).toThrow(
        MESSAGES.duplications,
      );
    },
  );

  test('유효성 검사에서 에러가 발생하지 않으면 숫자가 반환된다.', () => {
    // given
    const INPUT = '17';
    const OUTPUT = 17;

    // when
    const winningNumbers = new BonusNumber(
      INPUT,
      WINNGS_NUMBERS,
    ).getBonusNumber();

    // then
    expect(winningNumbers).toBe(OUTPUT);
  });
});

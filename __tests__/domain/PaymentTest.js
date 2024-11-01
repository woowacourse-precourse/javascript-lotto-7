import Payment from '../../src/domain/Payment';

describe('구입 금액 테스트', () => {
  const MESSAGE = {
    empty: '[ERROR] 아무 것도 입력하지 않았습니다.',
    notNumber: '[ERROR] 숫자가 아닌 값을 입력했습니다.',
    notInteger: '[ERROR] 정수를 입력하지 않았습니다.',
    range: '[ERROR] 0보다 큰 수를 입력하세요.',
    unit: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  };

  test('빈 문자열이면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => new Payment(INPUT)).toThrow(MESSAGE.empty);
  });

  test.each([['1,000'], ['1e1'], ['1.2'], ['4/2']])(
    '숫자가 아닌 문자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new Payment(input)).toThrow(MESSAGE.notNumber);
    },
  );

  test('정수를 입력하지 않으면 에러가 발생한다.', () => {
    // given
    const INPUT = '1000000000000000000000000000000000000';

    // then
    expect(() => new Payment(INPUT)).toThrow(MESSAGE.notInteger);
  });

  test.each([['-51000'], ['0']])(
    '양의 정수를 입력하지 않으면 에러가 발생한다.',
    (input) => {
      expect(() => new Payment(input)).toThrow(MESSAGE.range);
    },
  );

  test('1,000원으로 나누어 떨어지지 않는 경우 에러가 발생한다.', () => {
    // given
    const INPUT = '1234';

    // then
    expect(() => new Payment(INPUT)).toThrow(MESSAGE.unit);
  });

  test('유효성 검사에서 에러가 없으면 숫자형으로 반환한다.', () => {
    // given
    const INPUT = '12000';
    const OUTPUT = 12000;

    // when
    const payment = new Payment(INPUT).getPayment();

    // then
    expect(payment).toBe(OUTPUT);
  });
});

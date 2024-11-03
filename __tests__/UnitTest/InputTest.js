import { Console } from '@woowacourse/mission-utils';
import ERROR from '../../src/constants/error.js';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('로또 구입 금액 입력값 테스트', () => {
  const PASS_CASES = ['1000', '2000', '5000'];
  test.each(PASS_CASES)('옳바른 로또 구매 금액 입력', (purchase) => {
    mockQuestions(purchase);
    expect().toBe(Number(purchase));
  });

  test('1000원 단위가 아닌 입력값인 경우 예외가 발생한다.', async () => {
    mockQuestions('1200');
    expect().toThrow(ERROR.IS_NOT_DEVIDED);
  });

  test('1000원 이하의 금액인 경우 예외가 발생한다.', async () => {
    mockQuestions('-1000');
    expect().toThrow(ERROR.SMALL_THAN_THOUSAND);
  });

  test('숫자가 아닌경우 예외가 발생한다.', async () => {
    mockQuestions('a');
    expect().toThrow(ERROR.INVALID_VALUE);
  });
});

describe('로또 번호 입력값 테스트', () => {
  const PASS_CASES = [
    '1, 2, 3, 4, 5, 6',
    '1, 5, 7, 21, 37, 42',
    '11, 14, 26, 32, 33, 45',
  ];

  test.each(PASS_CASES)('옳바른 로또 번호 입력값', async (numbers) => {
    mockQuestions(numbers);
    expect().toStrictEqual(numbers.split(',').map(Number));
  });

  test('로또 번호를 입력하지 않을 경우 예외가 발생한다.', async () => {
    mockQuestions('');
    await expect().toThrow(ERROR.BLANK);
  });

  test('범위를 벗어난 로또 번호를 입력할 경우 예외가 발생한다.', async () => {
    mockQuestions('1, 2, 3, 4, 5, 47');
    await expect().toThrow(ERROR.INVALID_RANGE_NUMBER);
  });

  test('숫자가 아닌 값을 입력했을 경우 예외가 발생한다.', async () => {
    mockQuestions('a, b, 3, 4, 5, 6');
    await expect().toThrow(ERROR.INVALID_VALUE);
  });

  test('정수가 아닌 값을 입력했을 경우 예외가 발생한다.', async () => {
    mockQuestions('1, 2, 3, 4, 5.5, 6');
    await expect().toThrow(ERROR.IS_NOT_INT);
  });
});

describe('보너스 번호 입력값 테스트', () => {
  const PASS_CASES = ['1', '7', '3', '45'];
  test.each(PASS_CASES)('올바른 보너스 번호 입력값', (number) => {
    mockQuestions(number);
    expect().toStrictEqual(Number(number));
  });

  test('보너스 번호를 입력하지 않을 경우 예외가 발생한다.', async () => {
    mockQuestions('');
    await expect().toThrow(ERROR.BLANK);
  });

  test('범위를 벗어난 보너스 번호를 입력할 경우 예외가 발생한다.', async () => {
    mockQuestions('46');
    await expect().toThrow(ERROR.INVALID_RANGE_NUMBER);
  });

  test('숫자가 아닌 값을 입력했을 경우 예외가 발생한다.', async () => {
    mockQuestions('a');
    await expect().toThrow(ERROR.INVALID_VALUE);
  });

  test('정수가 아닌 값을 입력했을 경우 예외가 발생한다.', async () => {
    mockQuestions('4.3');
    await expect().toThrow(ERROR.IS_NOT_INT);
  });
});

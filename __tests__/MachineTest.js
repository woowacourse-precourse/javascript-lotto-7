import { Console, Random } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async (random, input, output) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = random;
  const INPUT_NUMBERS_TO_END = input;

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it.each([
    [
      [1, 2, 3, 4, 5, 6],
      [undefined, '1,2,3,4,5,6', '7'],
      '[ERROR] 구입 금액을 입력해 주세요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [null, '1,2,3,4,5,6', '7'],
      '[ERROR] 구입 금액을 입력해 주세요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['', '1,2,3,4,5,6', '7'],
      '[ERROR] 구입 금액을 입력해 주세요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000j', '1,2,3,4,5,6', '7'],
      '[ERROR] 구입 금액은 정수 외 다른 문자열은 입력할 수 없어요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1100', '1,2,3,4,5,6', '7'],
      '[ERROR] 구입 금액은 1000원 단위로 입력해주세요.',
    ],
  ])('로또 구입 금액 예외 테스트', async (random, input, output) => {
    await runException(random, input, output);
  });

  it.each([
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', undefined, '7'],
      '[ERROR] 로또 번호를 입력해 주세요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', null, '7'],
      '[ERROR] 로또 번호를 입력해 주세요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', '', '7'],
      '[ERROR] 로또 번호를 입력해 주세요.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', '1,2,3,4,5,6,7', '8'],
      '[ERROR] 로또 번호는 6개여야 합니다.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', '1,2,3,4,6,6', '8'],
      '[ERROR] 로또 번호는 중복되면 안됩니다.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', '0,2,3,4,5,6', '8'],
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', '1,2,3,4,5,46', '8'],
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    ],
    [
      [1, 2, 3, 4, 5, 6],
      ['1000', '1,2,3,4,5,6.7', '8'],
      '[ERROR] 로또 번호는 숫자외 다른 문자열이 포함될 수 없습니다.',
    ],
  ])('로또 번호 예외 테스트', async (random, input, output) => {
    await runException(random, input, output);
  });
});

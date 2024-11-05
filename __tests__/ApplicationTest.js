import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async (input, position) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  // 특정 위치에 input 값을 삽입
  const inputs = [...INPUT_NUMBERS_TO_END];
  inputs.splice(position, 0, input);

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions(inputs);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy)
    .toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트', async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy)
        .toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  describe('잘못된 입력 예외 테스트', () => {
    describe('구매 금액 예외 테스트', () => {
      const POSITION = 0;

      test.each([
        { description: '문자와 숫자가 혼합된 입력', input: '1000j' },
        { description: '음수 금액 입력', input: '-1000' },
        { description: '소수 입력', input: '1000.5' },
        { description: '음수 소수 입력', input: '-1000.5' },
        { description: '과학적 표기법 입력', input: '1e3' },
        { description: '알파벳과 숫자 혼합된 입력', input: '1A00' },
        { description: '0 입력', input: '0' },
        { description: '빈 문자열 입력', input: '' },
        { description: '공백 입력', input: ' ' },
        { description: '특수 문자 입력', input: '$1000' },
        { description: '영문 입력', input: 'one thousand' },
        { description: 'null 입력', input: null },
        { description: 'undefined 입력', input: undefined },
      ])('$description', async ({ input }) => {
        await runException(input, POSITION);
      });
    });

    describe('당첨 번호 예외 테스트', () => {
      const POSITION = 1;

      test.each([
        { description: '당첨 번호에 숫자 외 문자 포함', input: '1,2,3,4,5,X' },
        { description: '당첨 번호에 중복된 숫자 포함', input: '1,2,3,4,5,5' },
        { description: '당첨 번호에 0 포함', input: '0,2,3,4,5,6' },
        { description: '당첨 번호에 음수 포함', input: '1,2,-3,4,5,6' },
        {
          description: '당첨 번호에 45를 초과하는 숫자 포함',
          input: '1,2,3,4,5,46',
        },
        { description: '당첨 번호에 공백 포함', input: '1,2, ,4,5,6' },
        { description: '당첨 번호에 소수 포함', input: '1,2,3,4.5,5,6' },
        { description: '당첨 번호에 다른 구분자 사용', input: '1#2,3,4,5,6' },
        { description: '당첨 번호에 다중 구분자 사용', input: '1,,2,3,4,5,6' },
        { description: '공백 포함 숫자 입력', input: '1, 2,3,4,5,6' },
        { description: '알파벳과 숫자 혼합', input: '1a,2,3,4,5,6' },
        { description: 'null 입력', input: null },
        { description: 'undefined 입력', input: undefined },
      ])('$description', async ({ input }) => {
        await runException(input, POSITION);
      });
    });

    describe('보너스 번호 예외 테스트', () => {
      const POSITION = 2;

      test.each([
        { description: '보너스 번호에 숫자 외 문자 포함', input: 'X' },
        { description: '보너스 번호에 0 포함', input: '0' },
        { description: '보너스 번호에 음수 포함', input: '-7' },
        { description: '보너스 번호에 45를 초과하는 숫자 포함', input: '46' },
        { description: '보너스 번호에 소수 포함', input: '7.5' },
        { description: '보너스 번호에 공백 포함', input: ' ' },
        { description: '보너스 번호에 중복되는 번호 포함', input: '6' },
        { description: '과학적 표기법 입력', input: '7e1' },
        { description: '숫자와 특수 문자 조합', input: '7*' },
        { description: 'null 입력', input: null },
        { description: 'undefined 입력', input: undefined },
      ])('$description', async ({ input }) => {
        await runException(input, POSITION);
      });
    });
  });
});

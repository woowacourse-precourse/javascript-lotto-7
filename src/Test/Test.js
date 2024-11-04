import { Console, Random } from '@woowacourse/mission-utils';

import App from '../App.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickUniqueNumbersInRange,
  );
};

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};
// 조금 난잡하게 리펙토링 된 구석이 있음.
const runErrorLogTest =
  (func) =>
  ({ description, input, lottoNumbers, expected, errorLog }) => {
    test(description, () => {
      const logSpy = getLogSpy();
      let result;

      if (lottoNumbers !== undefined) {
        result = func(input, lottoNumbers);
      } else {
        result = func(input);
      }

      if (expected !== undefined) expect(result).toEqual(expected);
      if (errorLog) {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorLog));
      }
    });
  };

const runExceptionTest =
  (func) =>
  ({ description, input, expected, expectedError }) => {
    test(description, () => {
      if (expectedError) {
        // 예외가 발생할 것으로 예상되는 경우
        expect(() => func(input)).toThrow(expectedError);
      } else {
        // 예외가 발생하지 않을 것으로 예상되는 경우
        const result = func(input);
        expect(result).toEqual(expected);
      }
    });
  };

export {
  runErrorLogTest,
  runExceptionTest,
  getLogSpy,
  mockQuestions,
  mockRandoms,
  runException,
};

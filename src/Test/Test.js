import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
// 후에 리펙토링 필요.
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

export { runErrorLogTest, runExceptionTest };

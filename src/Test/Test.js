import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const runErrorLogTest =
  (func) =>
  ({ description, input, expected, errorLog }) => {
    test(description, () => {
      const logSpy = getLogSpy();
      const result = func(input);
      if (expected !== undefined) expect(result).toEqual(expected);
      if (errorLog)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorLog));
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

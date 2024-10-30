import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const runExceptionTest =
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

export { runExceptionTest };

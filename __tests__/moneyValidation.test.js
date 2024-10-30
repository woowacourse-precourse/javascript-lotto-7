import { Console } from '@woowacourse/mission-utils';
import { validateMoney } from '../src/Validation/Validation.js';
import { ERROR_MESSAGES } from '../src/Error.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const validateMoneyTestCases = [
  { description: '1000을 입력하다', input: '1000', expected: 1000n },
  { description: 'three', input: 'three', log: '[ERROR]: 정수가 아닙니다.' },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
];

const runExceptionTest = async ({ description, input, expected, log }) => {
  test(description, async () => {
    const logSpy = getLogSpy();
    const result = validateMoney(input);
    if (expected) expect(result).toBe(expected);
    if (log) expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};
validateMoneyTestCases.forEach(runExceptionTest);

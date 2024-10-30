import { validateMoney } from '../src/Validation/Validation.js';

const validateMoneyTestCases = [
  { description: '1000을 입력하다', input: '1000', expected: 1000n },
  { description: 'three', input: '2000', expected: 200ㅜ },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
  { description: '2000', input: '2000', expected: 2000n },
];

const runExceptionTest = async ({ description, input, expected }) => {
  test(description, async () => {
    const logSpy = getLogSpy();
    const result = validateMoney(input);
    expect(result).toBe(expected);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};
validateMoneyTestCases.forEach(runExceptionTest);

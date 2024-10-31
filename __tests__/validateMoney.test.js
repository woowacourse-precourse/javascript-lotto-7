import validateMoney from '../src/Validation/validateMoney.js';
import { ERROR_MESSAGES } from '../src/Error.js';
import { runErrorLogTest } from '../src/Test/Test.js';

const validateMoneyTestCases = [
  {
    description: '1000을 입력하면 올바르게 1000을 반환해야 한다.',
    input: '1000',
    expected: 1000,
  },
  {
    description: `'three' 문자열을 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: 'three',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `0을 입력하면, ${ERROR_MESSAGES.money.ZERO_MONEY_NOT_ALLOWED} 에러를 출력해야 한다.`,
    input: '0',
    errorLog: ERROR_MESSAGES.money.ZERO_MONEY_NOT_ALLOWED,
  },
  {
    description: `빈 문자열을 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `공백 문자열을 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '    ',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `음수를 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '-100',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `123+공백을 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '123 ',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },

  {
    description: `5a를 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '5a',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `1e2를 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '1e2',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },

  {
    description: `Infinity를 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: 'Infinity',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `-Infinity를 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '-Infinity',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },
  {
    description: `1000n를 입력하면, ${ERROR_MESSAGES.money.INVALID_INPUT_MONEY} 에러를 출력해야 한다.`,
    input: '1000n',
    errorLog: ERROR_MESSAGES.money.INVALID_INPUT_MONEY,
  },

  {
    description: '2000을 입력하면 올바르게 2000을 반환해야 한다.',
    input: '2000',
    expected: 2000,
  },
  {
    description: '10000을 입력하면 올바르게 10000을 반환해야 한다.',
    input: '10000',
    expected: 10000,
  },
  {
    description:
      '10000000000000000000을 입력하면 올바르게 10000000000000000000을 반환해야 한다.',
    input: '10000000000000000000',
    expected: 10000000000000000000,
  },
];

validateMoneyTestCases.forEach(runErrorLogTest(validateMoney));

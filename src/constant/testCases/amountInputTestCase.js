import { errorMessage } from '../errorMessage.js';

export const amountInputErrorTestCase = [
  {
    amount: 0,
    description: '구매 금액이 0원이면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.negativeAmount}`,
  },
  {
    amount: -123,
    description: '구매 금액이 음수면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.negativeAmount}`,
  },
  {
    amount: 5100,
    description: '구매 금액이 1,000원 단위가 아니라면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.divisibleAmount}`,
  },
  {
    amount: 'abc',
    description: '구매 금액이 숫자가 아니라면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidAmount}`,
  },
  {
    amount: 123.45,
    description: '구매 금액이 정수가 아니라면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.notIntegerAmount}`,
  },
  {
    amount: '12300a',
    description: '구매 금액이 정수가 아니라면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.notIntegerAmount}`,
  },
];

export const amountInputSuccessTestCase = [
  {
    amount: 1000,
    description: '구매 금액이 1,000원이면',
    expected: '1개를 구매했습니다.',
  },
  {
    amount: 10000,
    description: '구매 금액이 10,000원이면',
    expected: '10개를 구매했습니다.',
  },
  {
    amount: 100000,
    description: '구매 금액이 100,000원이면',
    expected: '100개를 구매했습니다.',
  },
  {
    amount: 10000000000000,
    description: '구매 금액이 10,000,000,000,000원이면',
    expected: '10000000000개를 구매했습니다.',
  },
];

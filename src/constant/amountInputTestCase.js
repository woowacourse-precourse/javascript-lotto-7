import { errorMessage } from './errorMessage.js';

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

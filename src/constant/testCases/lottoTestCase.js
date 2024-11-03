import { errorMessage } from '../errorMessage.js';

export const lottoInputErrorTestCase = [
  {
    numbers: '1, 2,3,4,5,6',
    description: '구분자가 ,가 아니면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: '1.2,3.4,5,6',
    description: '구분자가 ,가 아니면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: '1;2,3,4,5,6',
    description: '구분자가 ,가 아니면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: '1,2,3,4,5,6,7',
    description: '로또 번호의 개수가 6개가 넘어가면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: '1,2,3,4,5,5',
    description: '로또 번호에 중복된 숫자가 있으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.duplicatedNumber}`,
  },
  {
    numbers: '1,2,3,4,5',
    description: '로또 번호의 개수가 6개보다 적으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: '1,2,3,4,5,55',
    description: '로또 번호에 1~45 범위를 벗어나는 숫자가 있으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidNumberRange}`,
  },
  {
    numbers: '너무 유효하지 않은 입력값',
    description: '유효한 입력값이 아니면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: '1,2,3,$4,%5,6',
    description: '다른 문자가 포함되어 있으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
];

export const lottoInputSuccessTestCase = [
  {
    numbers: '1,2,3,4,5,6',
    description: '로또 번호가 1,2,3,4,5,6이면',
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    numbers: '1,12,23,32,43,45',
    description: '로또 번호가 1,12,23,32,43,45이면',
    expected: [1, 12, 23, 32, 43, 45],
  },
];

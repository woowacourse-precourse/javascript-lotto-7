import { errorMessage } from './errorMessage.js';

export const lottoTestCase = [
  {
    numbers: [1, 2, 3, 4, 5, 6, 7],
    description: '로또 번호의 개수가 6개가 넘어가면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: [1, 2, 3, 4, 5, 5],
    description: '로또 번호에 중복된 숫자가 있으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.duplicatedNumber}`,
  },
  {
    numbers: [1, 2, 3, 4, 5],
    description: '로또 번호의 개수가 6개보다 적으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidLotto}`,
  },
  {
    numbers: [1, 2, 3, 4, 5, 55],
    description: '로또 번호에 1~45 범위를 벗어나는 숫자가 있으면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidNumberRange}`,
  },
];

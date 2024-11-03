import { errorMessage } from './errorMessage.js';

export const bonusNumberErrorTestCase = [
  {
    bonusNumber: '0',
    description: '보너스 번호가 0이면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidNumberRange}`,
  },
  {
    bonusNumber: '46',
    description: '보너스 번호가 45 초과이면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidNumberRange}`,
  },
  {
    bonusNumber: '-1',
    description: '보너스 번호가 -1이면',
    errorMessage: `${errorMessage.prefix} ${errorMessage.invalidNumberRange}`,
  },
];

export const bonusNumberSuccessTestCase = [
  {
    bonusNumber: '4',
    description: '보너스 번호가 유효하면',
    expected: 4,
  },
  {
    bonusNumber: ' 24  ',
    description: '보너스 번호가 유효하고 공백이 있으면',
    expected: 24,
  },
];

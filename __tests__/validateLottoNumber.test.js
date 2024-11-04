import { runErrorLogTest } from '../src/Test/Test.js';
import ERROR_MESSAGES from '../src/Error/Error.js';
import validateLottoNumber from '../src/Validation/Input/validateLottoNumber.js';

const validateLottoNumberTestCases = [
  {
    description:
      '유효한 입력값 (예: "1, 2, 3, 4, 5, 6")을 입력하면 올바른 배열을 반환해야 합니다.',
    input: '1, 2, 3, 4, 5, 6',
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    description:
      '입력값에 공백이 포함되어 있어도 올바른 배열을 반환해야 합니다. (예: "10 , 20, 30 ,40,  45, 5 ")',
    input: '10 , 20, 30 ,40,  45, 5 ',
    expected: [10, 20, 30, 40, 45, 5],
  },
  {
    description: `6개 미만의 숫자가 입력되면 "${ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT}" 메시지를 출력하고 false를 반환해야 합니다.`,
    input: '1, 2, 3, 4, 5',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT,
  },
  {
    description: `6개 초과의 숫자가 입력되면 "${ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT}" 메시지를 출력하고 false를 반환해야 합니다.`,
    input: '1, 2, 3, 4, 5, 6, 7',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT,
  },
  {
    description: `중복된 숫자가 포함된 경우 "${ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER}" 메시지를 출력하고 false를 반환해야 합니다.`,
    input: '1, 2, 3, 3, 5, 6',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER,
  },
  {
    description: `숫자가 아닌 값이 포함된 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 메시지를 출력하고 false를 반환해야 합니다. (예: "1, 2, a, 4, 5, 6")`,
    input: '1, 2, a, 4, 5, 6',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자(45 초과)가 포함된 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 메시지를 출력하고 false를 반환해야 합니다. (예: "1, 2, 3, 4, 5, 46")`,
    input: '1, 2, 3, 4, 5, 46',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자(1 미만)가 포함된 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 메시지를 출력하고 false를 반환해야 합니다. (예: "0, 2, 3, 4, 5, 6")`,
    input: '0, 2, 3, 4, 5, 6',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자(1 미만)가 포함된 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 메시지를 출력하고 false를 반환해야 합니다. (예: "10, 2, 3, 4, 5, 6")`,
    input: '1e1, 2, 3, 4, 5, 6',
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
];

validateLottoNumberTestCases.forEach(runErrorLogTest(validateLottoNumber));

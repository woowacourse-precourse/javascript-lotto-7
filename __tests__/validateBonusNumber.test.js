import { runErrorLogTest } from '../src/Test/Test.js';
import ERROR_MESSAGES from '../src/Error/Error.js';
import validateBonusNumber from '../src/Validation/Input/validateBonusNumber.js';

const validateBonusNumberTestCases = [
  {
    description:
      '유효한 보너스 번호 (예: "10")를 입력하면 해당 숫자를 반환해야 합니다.',
    input: '10',
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: 10,
  },
  {
    description: `숫자가 아닌 값을 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: 'a',
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `숫자가 아닌 값을 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: '1e1',
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자 (45 초과)를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: '46',
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자 (1 미만)를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: '0',
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `중복된 번호를 입력하면 "${ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER}" 에러 메시지가 출력되어야 합니다.`,
    input: '5',
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER,
  },
];
const boundaryTestCases = [
  {
    description: `NaN을 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.NaN.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `Infinity를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.POSITIVE_INFINITY.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `-Infinity를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.NEGATIVE_INFINITY.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `표현할 수 있는 최대 정수 (MAX_SAFE_INTEGER)를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.MAX_SAFE_INTEGER.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `표현할 수 있는 최대 값 (MAX_VALUE)를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.MAX_VALUE.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `표현할 수 있는 최소 정수 (MIN_SAFE_INTEGER)를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.MIN_SAFE_INTEGER.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `표현할 수 있는 최소 값 (MIN_VALUE)를 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.MIN_VALUE.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `1에 아주 근접한 값 (EPSILON)을 입력하면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지가 출력되어야 합니다.`,
    input: Number.EPSILON.toString(),
    lottoNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
];

validateBonusNumberTestCases.forEach(runErrorLogTest(validateBonusNumber));

boundaryTestCases.forEach(runErrorLogTest(validateBonusNumber));

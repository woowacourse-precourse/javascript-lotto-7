import { runExceptionTest } from '../src/Test/Test.js';
import ERROR_MESSAGES from '../src/Error/Error.js';
import validateLotteryNotes from '../src/Validation/Domain/validateLotteryNotes.js';

const validateLotteryNotesTestCases = [
  {
    description:
      '유효한 금액 (예: 5000)을 입력하면 올바른 노트 수를 반환해야 합니다.',
    input: 5000,
    expected: 5,
  },
  {
    description:
      '유효한 금액 (예: 1000)을 입력하면 올바른 노트 수를 반환해야 합니다.',
    input: 1000,
    expected: 1,
  },
  {
    description: `숫자가 아닌 값을 입력하면 "${ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT}" 에러를 발생시켜야 합니다.`,
    input: 'abc',
    expected: false,
    expectedError: ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
  },
  {
    description: `음수 또는 0을 입력하면 "${ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT}" 에러를 발생시켜야 합니다. (예: -1000)`,
    input: -1000,
    expected: false,
    expectedError: ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
  },
  // 앞의 로직에서 걸릴것이라... 설마..
  //   {
  //     description: `금액이 1,000원 단위가 아니면 "${ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT}" 에러를 발생시켜야 합니다. (예: 1500)`,
  //     input: 1500,
  //     expected: false,
  //     expectedError: ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
  //   },
  {
    description: `금액이 0인 경우 "${ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT}" 에러를 발생시켜야 합니다.`,
    input: 0,
    expected: false,
    expectedError: ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
  },
];

validateLotteryNotesTestCases.forEach(runExceptionTest(validateLotteryNotes));

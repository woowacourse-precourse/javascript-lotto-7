import { ERROR_MESSAGES } from '../Error.js';
import runValidators from './runValidators.js';
import { isNumber } from '../Util/Regex.js';

const validateLotteryNotesNumber = (lotteryNotes) => {
  if (!isNumber.test(lotteryNotes)) {
    throw new Error(ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT);
  }
  return true;
};
const validatePositiveLotteryNotes = (lotteryNotes) => {
  if (lotteryNotes <= 0) {
    throw new Error(ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT);
  }
  return true;
};

export default function validateLotteryNotes(paidAmount) {
  const validators = [
    validateLotteryNotesNumber,
    validatePositiveLotteryNotes,
    // validateDivisibleByThousand,
  ];
  const parsedNotes = Number.parseInt(paidAmount / 1000, 10);
  const isValid = runValidators(parsedNotes, validators);

  if (isValid) {
    return parsedNotes;
  }
  return false;
}

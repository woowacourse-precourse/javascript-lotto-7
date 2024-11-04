import { ERROR_MESSAGES } from '../constants/constants';

const { INVALID_EMPTY_INPUT } = ERROR_MESSAGES;

const trimInputAndCheckEmpty = (input) => {
  const trimmedInput = input.trim();

  if (trimmedInput === '') {
    throw new Error(INVALID_EMPTY_INPUT);
  }

  return trimmedInput;
};

export { trimInputAndCheckEmpty };

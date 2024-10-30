import { Console } from '@woowacourse/mission-utils';

export const readInput = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput;
};

export const handleError = (message) => {
  const formattedMessage = `[ERROR] ${message}`;
  throw Error(formattedMessage);
};

export const checkValidNumber = (inputs, message) => {
  if (isNaN(inputs)) handleError(message);

  return inputs;
};

import { Console } from '@woowacourse/mission-utils';

export const getInput = async (message) => {
  const input = await Console.readLineAsync(message);

  return input.trim();
};

export const printOutput = (message) => {
  Console.print(message);
};

export const printNewLine = () => {
  Console.print('');
};

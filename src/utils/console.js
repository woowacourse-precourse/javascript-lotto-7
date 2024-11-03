import { Console } from '@woowacourse/mission-utils';

const printMessage = (message) => {
  Console.print(message);
};

const promptUserInput = async (message) => {
  return await Console.readLineAsync(message);
};

export { printMessage, promptUserInput };

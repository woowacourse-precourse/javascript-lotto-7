import { Console } from '@woowacourse/mission-utils';

const getUserInput = (message) => {
  return Console.readLineAsync(message);
};

export default getUserInput;

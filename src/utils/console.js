import { Console } from '@woowacourse/mission-utils';
import { CONFIRMATION_MESSAGES } from '../constants/constants.js';

const { PURCHASE_COMPLETE_MESSAGE } = CONFIRMATION_MESSAGES;

const printMessage = (message) => {
  Console.print(message);
};

const promptUserInput = async (message) => {
  return await Console.readLineAsync(message);
};

const printLotto = (lotto) => {
  Console.print(`[${lotto.getNumbers().join(', ')}]`);
};

const printLottoList = (lottos) => {
  printMessage(`\n${PURCHASE_COMPLETE_MESSAGE(lottos.length)}`);
  lottos.forEach((lotto) => {
    printLotto(lotto);
  });
};

export { printMessage, promptUserInput, printLottoList };

import { INPUT_MESSAGE } from '../Constants/Message.js';

class inputView {
  getMoney = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.purchaseMoney);
  };

  getWinningNumber = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.winningNumber);
  };

  getBonusNumber = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  };
}

export { getMoney, getWinningNumber, getBonusNumber };

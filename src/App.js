import { Console } from '@woowacourse/mission-utils';
import { inputBonusNum, inputBuyCash, inputWinningNums } from './console/input.js';
import {
  setInputBonusNumValue,
  setInputBuyCashValue,
  setInputBuyNumValue,
  setInputWiinningNumsValue,
} from './constants/constants.js';
import { IO_MESSAGE, TEXT_LOTTO_RESULT } from './constants/message.js';
import Game from './Game.js';
import { getPurchaseNums } from './utils/getPurchaseNums.js';
import Rate from './utils/rate.js';

class App {
  async run() {
    try {
      setInputBuyCashValue(null);
      setInputBuyNumValue(null);
      setInputWiinningNumsValue(null);
      setInputBonusNumValue(null);

      const cash = await inputBuyCash();
      const count = cash / 1000;
      Console.print(`${count}${IO_MESSAGE.INPUT_ALARM_BUY}`);

      let lottoNums = getPurchaseNums(count);
      lottoNums.forEach((val) => {
        Console.print(`[${val.join(', ')}]`);
      });

      const winningNumbers = await inputWinningNums();

      const bonusNumber = await inputBonusNum(winningNumbers);

      const results = Game(lottoNums);

      Console.print(IO_MESSAGE.OUTPUT_TEXT);
      Console.print(TEXT_LOTTO_RESULT());
      Rate();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;

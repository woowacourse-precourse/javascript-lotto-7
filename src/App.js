import { Console } from '@woowacourse/mission-utils';
import InputHandler from './Model/InputHandler.js';
import Lotto from './Model/Lotto.js';
import Input from './View/Input.js';
import User from './Model/User.js';
import Output from './View/Output.js';
import ErrorHandler from './Model/ErrorHandler.js';

class App {
  async run() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = await Input.purchaseAmount();
        ErrorHandler.validateNumericInput(purchaseAmount);
        ErrorHandler.notDevideIntoThousand(purchaseAmount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const user = new User(purchaseAmount);
    const userLottoList = user.getLottoList();
    const purchaseCount = user.getPurchaseCount();
    Output.printLottoCount(purchaseCount);
    Output.printLottoList(userLottoList);

    let lotteryNumber;
    let lottoArray;
    let lotto;
    while (true) {
      try {
        lotteryNumber = await Input.lotteryNumber();
        ErrorHandler.validateLottoNumber(lotteryNumber);
        ErrorHandler.validateNumericArray(lotteryNumber);
        lottoArray = InputHandler.lottoArray(lotteryNumber);
        lotto = new Lotto(lottoArray);

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await Input.bonusNumber();
        ErrorHandler.validateNumericInput(bonusNumber);
        ErrorHandler.validateLottoNumber(bonusNumber);
        ErrorHandler.validateBonusNumberNotInLottoNumber(
          lottoArray,
          bonusNumber,
        );
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    userLottoList.forEach((myLotto) => {
      const count = lotto.lotteryStatus(myLotto);
      const hasBonusNumber = lotto.haveBonusNumber(myLotto, bonusNumber);
      user.setLotteryStatistics(count, hasBonusNumber);
    });

    const lotteryStatistics = user.getLotteryStatistics();
    Output.printLotteryStatistics(lotteryStatistics);

    user.calculateProfitRate(lotteryStatistics);
    const profitRate = user.getProfitRate();
    Output.printProfitRate(profitRate);
  }
}

export default App;

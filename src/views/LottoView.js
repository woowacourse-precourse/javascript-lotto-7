import Validator from '../utils/Validator.js';
import constants from '../constants/constants.js';

const { MESSAGE, LOTTO } = constants;

class LottoView {
  constructor(outputFunction, inputFunction) {
    this.print = outputFunction;
    this.readLine = inputFunction;
  }

  async getCashInHand() {
    return this.readLine(MESSAGE.INPUT.PURCHASE);
  }

  printLottoPurchase(lottos) {
    const lottosNumber = Object.keys(lottos).length;
    this.print(`\n${lottosNumber}${MESSAGE.OUTPUT.PURCHASE}`);
    for (let i = 0; i < lottosNumber; i += 1) {
      this.print(`[${lottos[i].join(', ')}]`);
    }
  }

  async getTargetLottoArray() {
    const numbers = await this.readLine(MESSAGE.INPUT.WINNING);
    Validator.targetLottoValidation(numbers);
    const stringArray = numbers.split(',');
    return stringArray.map(str => parseInt(str, 10));
  }

  async getBonusNumber(targetLotto) {
    const bonusNumber = await this.readLine(MESSAGE.INPUT.BONUS);
    Validator.bonusNumberValidation(bonusNumber, targetLotto);
    return bonusNumber;
  }

  printWinningStatistics(winStatistics) {
    this.print(`\n${MESSAGE.OUTPUT.STATISTICS}`);
    this.print(MESSAGE.OUTPUT.DIVIDER);
    this.print(
      `${LOTTO.MESSAGE.MATCH.THREE} (${LOTTO.PRIZE.THREE.toLocaleString()}원) - ${
        winStatistics[3]
      }개`,
    );
    this.print(
      `${LOTTO.MESSAGE.MATCH.FOUR} (${LOTTO.PRIZE.FOUR.toLocaleString()}원) - ${
        winStatistics[4]
      }개`,
    );
    this.print(
      `${LOTTO.MESSAGE.MATCH.FIVE} (${LOTTO.PRIZE.FIVE.toLocaleString()}원) - ${
        winStatistics[5]
      }개`,
    );
    this.print(
      `${LOTTO.MESSAGE.MATCH.BONUS} (${LOTTO.PRIZE.BONUS.toLocaleString()}원) - ${
        winStatistics.bonus
      }개`,
    );
    this.print(
      `${LOTTO.MESSAGE.MATCH.SIX} (${LOTTO.PRIZE.SIX.toLocaleString()}원) - ${
        winStatistics[6]
      }개`,
    );
  }

  printRateOfReturn(rateOfReturn) {
    this.print(
      `${MESSAGE.OUTPUT.RATE}${rateOfReturn}${MESSAGE.OUTPUT.RATE_UNIT}`,
    );
  }
}

export default LottoView;

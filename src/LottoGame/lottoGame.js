import { readLineAsync, print } from '../Util/console.js';
import { INPUT_MESSAGES } from '../Constant/inPutMessages.js';
import { LOTTO_PRICE_VALIDATION } from '../Validator/lottoPriceValidation.js';
import LottoIssuance from '../LottoIssuance/lottoIssuance.js';
import { BONUS_NUMBER_VALIDATION } from '../Validator/bonusNumberValidation.js';
import { OUTPUT_MESSAGES } from '../Constant/outPutMessages.js';
import { SYMBOLS } from '../Constant/symbols.js';
import { WINNING_NUMBER_VALIDATION } from '../Validator/winningNumberValidation.js';

class LottoGame {
  async start() {
    const LOTTO_PRICE = await this.getLottoPrice();
    const lottoIssuance = new LottoIssuance(LOTTO_PRICE);
    lottoIssuance.printLottoBuyMessage();
    lottoIssuance.printLottoNumber();

    const WINNING_NUMBER = await this.getWinningNumber();
    const BONUS_NUMBER = await this.getBonusNumber();

    BONUS_NUMBER_VALIDATION(BONUS_NUMBER, WINNING_NUMBER);
    const statistics = this.comparison(
      lottoIssuance,
      WINNING_NUMBER,
      BONUS_NUMBER,
    );
    this.printStatistics(statistics);
  }

  async getLottoPrice() {
    const LOTTO_PRICE = await readLineAsync(INPUT_MESSAGES.buyLottoPrice);
    LOTTO_PRICE_VALIDATION(LOTTO_PRICE);
    return LOTTO_PRICE;
  }

  async getWinningNumber() {
    const WINNING_NUMBER = await readLineAsync(INPUT_MESSAGES.winningNumber);
    WINNING_NUMBER_VALIDATION(WINNING_NUMBER);
    return WINNING_NUMBER;
  }

  async getBonusNumber() {
    return await readLineAsync(INPUT_MESSAGES.bonusNumber);
  }

  comparison(lottoIssuance, winningNumber, bonusNumber) {
    const lottoNumberArray = lottoIssuance.getLottoNumbers();
    const statistics = this.initializeStatistics();

    lottoNumberArray.forEach((lottoNumber) => {
      const winningAccord = this.individualComparison(
        lottoNumber,
        winningNumber,
        bonusNumber,
      );
      this.updateStatistics(
        statistics,
        winningAccord,
        lottoNumber,
        bonusNumber,
      );
    });

    return statistics;
  }

  initializeStatistics() {
    return {
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
      bonusPrize: 0,
      sixthPrize: 0,
    };
  }

  updateStatistics(statistics, winningAccord, lottoNumber, bonusNumber) {
    switch (winningAccord) {
      case 3:
        statistics.thirdPrize++;
        break;
      case 4:
        statistics.fourthPrize++;
        break;
      case 5:
        if (this.compareBonusNumber(lottoNumber, bonusNumber)) {
          statistics.bonusPrize++;
        } else {
          statistics.fifthPrize++;
        }
        break;
      case 6:
        statistics.sixthPrize++;
        break;
    }
  }

  individualComparison(lottoNumber, WINNING_NUMBER, BONUS_NUMBER) {
    const winningNumbers = WINNING_NUMBER.split(SYMBOLS.comma).map(Number);
    return this.compareWinningNumbers(lottoNumber, winningNumbers);
  }

  compareWinningNumbers(lottoNumber, winningNumbers) {
    return lottoNumber.filter((num) => winningNumbers.includes(num)).length;
  }

  compareBonusNumber(lottoNumber, bonusNumber) {
    return lottoNumber.includes(Number(bonusNumber));
  }

  printStatistics(statistics) {
    print(OUTPUT_MESSAGES.winningStatistics);
    print(OUTPUT_MESSAGES.THIRD_PRIZE(statistics.thirdPrize));
    print(OUTPUT_MESSAGES.FOURTH_PRIZE(statistics.fourthPrize));
    print(OUTPUT_MESSAGES.FIFTH_PRIZE(statistics.fifthPrize));
    print(OUTPUT_MESSAGES.BONUS_PRIZE(statistics.bonusPrize));
    print(OUTPUT_MESSAGES.SIXTH_PRIZE(statistics.sixthPrize));
  }
}

export default LottoGame;

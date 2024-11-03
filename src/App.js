import Lotto from './Lotto.js';
import LottoAmount from './model/LottoAmount.js';
import LottoBonus from './model/LottoBonus.js';
import LottoResultCalculator from './model/LottoResultCalculator.js';
import { LOTTO_AMOUNT_UNIT } from './config/numberConfig.js';
import { splitNumbers, sortAscending, pickUniqueLottoRandomNumbers } from './util/util.js';

class App {

  constructor (inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async run(){
    let lottoAmount;
    let lottoWinningNumbers;
    let lottoBonusNumber;
    // chat GPT : while, 인터넷 서칭 후 break를 추가
    while (true) {
      try {
        const lottoAmountString = await this.inputView.inputLottoAmount();
        lottoAmount = this.validateAmount(lottoAmountString);
        break
      } catch (error) {
        this.outputView.outputError(error.message);
      }
    }

    const lottoQuantity = lottoAmount / LOTTO_AMOUNT_UNIT;
    const numberGenerator = new LottoNumberGenerator();
    const allRandomNumbers = numberGenerator.printLottoNumbers(lottoQuantity);
    this.outputView.outputLottoNumbers(lottoQuantity, allRandomNumbers);
    
    while (true) {
      try {
        const winningNumberInput = await this.inputView.inputWinningNumbers();
        lottoWinningNumbers = this.validateWinningNumbers(winningNumberInput);
        break
      } catch (error) {
        this.outputView.outputError(error.message);
      }
    }
    
    while (true) {
      try {
        const bonusNumberInput = await this.inputView.inputBonusNumber();
        lottoBonusNumber = this.validateBonusNumber(bonusNumberInput,lottoWinningNumbers);
        break
      } catch (error) {
        this.outputView.outputError(error.message);
      }
    }
    
    const resultCalculator = new LottoResultCalculator();
    const rankCounts = resultCalculator.calculateWinningRank(allRandomNumbers,lottoWinningNumbers,lottoBonusNumber);
    const profitRate = resultCalculator.calculateProfitRate(lottoAmount, rankCounts);
    const lottoResultPrinter = this.outputView.outputLottoResult(rankCounts, profitRate);
    
  }

  validateAmount(lottoAmountString) {
    const lottoAmount = new LottoAmount(Number(lottoAmountString));
    return lottoAmount.getAmount();
  }

  validateWinningNumbers(winningNumberInput) {
    const winningNumbers = new Lotto(splitNumbers(winningNumberInput));
    return winningNumbers.getWinningNumbers();
  }

  validateBonusNumber(bonusNumberInput,winningNumbers) {
    const bonusNumber = new LottoBonus(Number(bonusNumberInput),winningNumbers);
    return bonusNumber.getBonusNumber();
  }
}

class LottoNumberGenerator {
  printLottoNumbers(quantity) {
    const allLottoNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const numbers = pickUniqueLottoRandomNumbers();
      allLottoNumbers.push(sortAscending(numbers));
    }
    return allLottoNumbers;
  }
}

export default App;

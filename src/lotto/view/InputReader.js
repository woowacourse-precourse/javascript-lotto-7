import { input } from '../../util/IOUtil.js';
import { INPUT_MESSAGE } from '../constants/Message.js';
import CommonValidator from '../validate/CommonValidator.js';
import { retryIfOccurredError } from '../helper/RetryHelper.js';
import LottoWinningNumbers from '../model/LottoWinningNumbers.js';
import LottoPayment from '../model/LottoPayment.js';

const commonValidator = new CommonValidator();

const inputPayment = async () => {
  const payment = await retryIfOccurredError(
    async () => {
      const inputAmount = await input(INPUT_MESSAGE.REQUEST_PURCHASE_AMOUNT);
      return new LottoPayment(inputAmount);
    }
  );
  return payment;
}

const splitWinningNumbers = (winningNumbers) => winningNumbers.split(',').map((number) => number.replaceAll(' ', ''));

const inputWinningNumbers = async () => {
  const rawWinningNumbers = await input(INPUT_MESSAGE.REQUEST_WINNING_NUMBERS);
  commonValidator.checkValidInput(rawWinningNumbers);

  return splitWinningNumbers(rawWinningNumbers);
}

const inputBonusNumber = async () => {
  const rawNumber = await input(INPUT_MESSAGE.REQUEST_BONUS_NUMBER);
  commonValidator.checkValidInput(rawNumber);
  commonValidator.validateNumericInput(rawNumber);

  return Number(rawNumber);
}

async function inputLottoWinningNumbers() {
  const lottoWinningNumbers = await retryIfOccurredError(async () => {
    const winningNumbers = await inputWinningNumbers();
    return new LottoWinningNumbers(winningNumbers);
  });

  await retryIfOccurredError(async () => {
    const bonusNumber = await inputBonusNumber();
    lottoWinningNumbers.bonusNumber = bonusNumber;
  });

  return lottoWinningNumbers;
}

const InputReader = { inputPayment, inputLottoWinningNumbers };
export default InputReader;
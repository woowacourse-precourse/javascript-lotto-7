import LotteryFactory from '../LotteryFactory.js';
import validateLotteryNotes from '../Validation/validateLotteryNotes.js';

export default class LotteryService {
  constructor(lotteryClass, settings) {
    this.lotteryFactory = new LotteryFactory(lotteryClass, settings);
  }

  generateLotteries(count) {
    return this.lotteryFactory.createLotteries(count);
  }

  calculateMatchCount(lottoNumbers, winningNumbers, bonusNumber) {
    const matchingNumberCount = winningNumbers.filter((number) =>
      lottoNumbers.includes(number),
    ).length;

    const hasBonusNumber = lottoNumbers.includes(bonusNumber);

    return { matchingNumberCount, hasBonusNumber };
  }

  validateLotteryNotes(purchaseAmount) {
    return validateLotteryNotes(purchaseAmount);
  }
}

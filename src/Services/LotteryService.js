import LotteryFactory from '../Factory/LotteryFactory.js';
import Notes from '../Notes.js';

export default class LotteryService {
  constructor(lotteryClass, settings) {
    this.lotteryFactory = new LotteryFactory(lotteryClass, settings);
  }

  generateLotteries(count) {
    return this.lotteryFactory.createLotteries(count);
  }

  calculateNumberOfNotes(purchaseAmount) {
    return new Notes(purchaseAmount).getNotes();
  }

  calculateMatchCount(lottoNumbers, winningNumbers, bonusNumber) {
    const matchingNumberCount = winningNumbers.filter((number) =>
      lottoNumbers.includes(number),
    ).length;

    const hasBonusNumber = lottoNumbers.includes(bonusNumber);

    return { matchingNumberCount, hasBonusNumber };
  }
}

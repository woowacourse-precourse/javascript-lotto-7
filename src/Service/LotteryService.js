import LotteryFactory from '../LotteryFactory.js';

export default class LotteryService {
  constructor(lotteryClass, settings) {
    this.lotteryFactory = new LotteryFactory(lotteryClass, settings);
  }

  /**
   * Generates a specified number of lottery tickets.
   * @param {number} count - The number of tickets to generate.
   * @returns {Array} Array of generated lottery tickets.
   */
  generateLotteries(count) {
    return this.lotteryFactory.createLotteries(count);
  }

  /**
   * Calculates how many numbers match between a lottery ticket and the winning numbers.
   * @param {Array} lottoNumbers - The numbers on a lottery ticket.
   * @param {Array} winningNumbers - The winning numbers for the lottery.
   * @param {number} bonusNumber - The bonus number for the lottery.
   * @returns {Object} An object with match count and bonus match information.
   */
  calculateMatchCount(lottoNumbers, winningNumbers, bonusNumber) {
    const matchingNumberCount = winningNumbers.filter((number) =>
      lottoNumbers.includes(number),
    ).length;

    const hasBonusNumber = lottoNumbers.includes(bonusNumber);

    return { matchingNumberCount, hasBonusNumber };
  }
}

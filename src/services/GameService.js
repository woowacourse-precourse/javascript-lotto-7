import InputHandler from '../handlers/InputHandler.js';
import ResultCalculator from '../utils/ResultCalculator.js';

class GameService {
  static async getWinningNumbers() {
    const winningNumbers = await InputHandler.getWinningNumbers();
    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);
    return { winningNumbers, bonusNumber };
  }

  static calculateResults(lottoList, winningNumbers, bonusNumber) {
    return ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
  }
}

export default GameService;

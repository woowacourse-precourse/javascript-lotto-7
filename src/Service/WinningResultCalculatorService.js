import { TOTAL_PRIZE_RANKS } from '../constants.js';

class WinningResultCalculatorService {
  calculateWinningResult(winningNumbers, bonusNumber, lottoNumbers) {
    let winningCount = 0;
    let winningRank;

    lottoNumbers.forEach(lottoNumber => {
      if (winningNumbers.includes(lottoNumber)) {
        winningCount += 1;
      }
    });

    switch (winningCount) {
      case 3:
        winningRank = 5;
        break;
      case 4:
        winningRank = 4;
        break;
      case 5:
        if (lottoNumbers.includes(bonusNumber)) {
          winningRank = 2;
          break;
        }
        winningRank = 3;
        break;
      case 6:
        winningRank = 1;
        break;
      default:
        winningRank = -1;
        break;
    }

    return winningRank;
  }

  calculateWinningResults(winningNumbers, bonusNumber, lottos) {
    const totalWinningRank = [0, 0, 0, 0, 0];

    lottos.forEach(lotto => {
      const winningRank = this.calculateWinningResult(
        winningNumbers,
        bonusNumber,
        lotto.getNumbers()
      );

      if (winningRank >= 1 && winningRank <= TOTAL_PRIZE_RANKS) {
        totalWinningRank[winningRank - 1] += 1;
      }
    });

    return totalWinningRank;
  }
}

export default WinningResultCalculatorService;

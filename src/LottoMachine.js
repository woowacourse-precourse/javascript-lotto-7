import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class LottoMachine {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  generateLottoTickets(purchaseAmount) {
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const lottoNumbers = this.generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos;
  }

  calculateWinningResults(winningNumbers, bonusNumber, lottos) {
    const totalWinningRank = [0, 0, 0, 0, 0];

    lottos.forEach(lotto => {
      const winningRank = this.calculateWinningResult(
        winningNumbers,
        bonusNumber,
        lotto.getNumbers()
      );

      if (winningRank >= 1 && winningRank <= 5) {
        totalWinningRank[winningRank - 1] += 1;
      }
    });

    return totalWinningRank;
  }

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

  calculateTotalReturnRate(purchaseAmount, totalWinningRank) {}
}

export default LottoMachine;

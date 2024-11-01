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
    for (let i = 0; i < purchaseAmount; i++) {
      const lottoNumbers = this.generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos;
  }

  calculateWinningResults(winningNumbers, bonusNumber, lottos) {
    const totalWinningRank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach(lotto => {
      const winningRank = this.calculateWinningResult(
        winningNumbers,
        bonusNumber,
        lotto.getNumbers()
      );

      switch (winningRank) {
        case 1:
          totalWinningRank.first += 1;
          break;
        case 2:
          totalWinningRank.second += 1;
          break;
        case 3:
          totalWinningRank.third += 1;
          break;
        case 4:
          totalWinningRank.fourth += 1;
          break;
        case 5:
          totalWinningRank.fifth += 1;
          break;
        default:
          break;
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
}

export default LottoMachine;

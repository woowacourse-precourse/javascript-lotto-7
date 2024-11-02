import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import LottoNumberGenerateService from './LottoNumberGenerateService.js';

class LottoMachineService {
  #lottos;

  constructor() {
    this.#lottos = [];
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoNumberGenerateService = new LottoNumberGenerateService();
  }

  async run() {
    const purchaseAmount = await this.inputView.readPurchaseAmount();
    this.generateLottoTickets(purchaseAmount);
    this.outputView.printLottoNumbers(purchaseAmount / 1000, this.#lottos);
    const winningNumbers = await this.inputView.readWinningNumbers();
    const bonusNumber = await this.inputView.readBonusNumber(winningNumbers);
    const totalWinningRank = this.calculateWinningResults(
      winningNumbers,
      bonusNumber,
      this.#lottos
    );
    const totalReturnRate = this.calculateTotalReturnRate(
      purchaseAmount,
      totalWinningRank
    );
    this.outputView.printWinningStatistics(totalWinningRank);
    this.outputView.printTotalReturnRate(totalReturnRate);
  }

  generateLottoTickets(purchaseAmount) {
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const lottoNumbers =
        this.lottoNumberGenerateService.generateUniqueLottoNumbers();
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

  calculateTotalReturnRate(purchaseAmount, totalWinningRank) {
    const prizeAmounts = [2000000000, 30000000, 1500000, 50000, 5000];
    let totalPrize = 0;

    totalWinningRank.map((rankCount, index) => {
      totalPrize += rankCount * prizeAmounts[index];
    });

    const totalReturnRate = (totalPrize / purchaseAmount) * 100;
    return Math.round(totalReturnRate * 100) / 100;
  }
}

export default LottoMachineService;

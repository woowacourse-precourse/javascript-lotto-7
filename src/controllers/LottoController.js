import Lotto from '../models/Lotto.js';

class LottoController {
  constructor(purchaseAmount) {
    this.purchaseAmount = Number(purchaseAmount);
    this.lottos = [];
    this.resultCounts = this.initializeResultCounts();
    this.profitRate = 0.0;
  }

  //당첨 결과 카운트를 초기화하는 메서드
  initializeResultCounts() {
    return { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
  }

  //구매 금액에 따라 로또 티켓을 생성하는 메서드
  generateLottos() {
    const count = this.calculateLottoCount();
    this.createLottos(count);
  }

  //구매 금액을 기반으로 생성할 로또 티켓의 개수를 계산하는 메서드
  calculateLottoCount() {
    return Math.floor(this.purchaseAmount / 1000);
  }

  //지정된 개수만큼 로또 티켓을 생성하고, 로또 배열에 추가하는 메서드
  createLottos(count) {
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      this.lottos.push(lotto);
    }
  }

  //생성된 로또 티켓들의 번호를 배열 형태로 반환하는 메서드
  getLottos() {
    return this.lottos.map((lotto) => lotto.getNumbers());
  }

  //당첨 번호와 보너스 번호를 기반으로 당첨 결과를 계산하는 메서드
  calculateResult(winningNumbers, bonusNumber) {
    this.resetResultCounts();
    this.processLottos(winningNumbers, bonusNumber);
    return this.resultCounts;
  }

  //당첨 결과 초기화를 적용하는 메서드
  resetResultCounts() {
    this.resultCounts = this.initializeResultCounts();
  }

  //모든 로또 티켓을 순회하며 당첨 결과를 처리하는 메서드
  processLottos(winningNumbers, bonusNumber) {
    this.lottos.forEach((lotto) => {
      const { matchCount, hasBonus } = this.evaluateLotto(
        lotto,
        winningNumbers,
        bonusNumber,
      );
      this.updateResultCounts(matchCount, hasBonus);
    });
  }

  //단일 로또 티켓의 당첨 여부를 평가하는 메서드
  evaluateLotto(lotto, winningNumbers, bonusNumber) {
    const numbers = lotto.getNumbers();
    const matchCount = numbers.filter((num) =>
      winningNumbers.includes(num),
    ).length;
    const hasBonus = numbers.includes(bonusNumber);
    return { matchCount, hasBonus };
  }

  //매치 수와 보너스 포함 여부에 따라 결과 카운트를 업데이트하는 메서드
  updateResultCounts(matchCount, hasBonus) {
    if (matchCount === 6) {
      this.resultCounts[6]++;
      return;
    }

    if (matchCount === 5 && hasBonus) {
      this.resultCounts['5+bonus']++;
      return;
    }

    if (matchCount === 5) {
      this.resultCounts[5]++;
      return;
    }

    if (matchCount === 4) {
      this.resultCounts[4]++;
      return;
    }

    if (matchCount === 3) {
      this.resultCounts[3]++;
    }
  }

  //수익률을 계산하는 메서드
  calculateProfitRate(purchaseAmount) {
    const totalPrize = this.calculateTotalPrize();
    this.profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return this.profitRate;
  }

  //당첨 결과에 따른 총 상금을 계산하는 메서드
  calculateTotalPrize() {
    const prizeMoney = this.getPrizeMoney();
    let totalPrize = 0;
    for (const [rank, count] of Object.entries(this.resultCounts)) {
      totalPrize += count * prizeMoney[rank];
    }
    return totalPrize;
  }

  //각 등수에 따른 상금을 반환하는 메서드
  getPrizeMoney() {
    return {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5+bonus': 30000000,
      6: 2000000000,
    };
  }
}

export default LottoController;

import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import LottoService from './services/LottoService.js';

class App {
  // 프로그램 실행의 시작점, 전체 로직을 호출하는 메인 메서드
  async run() {
    const purchaseAmount = await this.handlePurchase(); // 구매 금액 입력 및 로또 수량 출력 처리
    const lottos = this.generateLottos(purchaseAmount); // 로또 번호 자동 생성 및 출력
    const { winningNumbers, bonusNumber } = await this.getWinningNumbersAndBonus(); // 당첨 번호 및 보너스 번호 입력
    this.showResults(lottos, purchaseAmount, winningNumbers, bonusNumber); // 당첨 결과 계산 및 출력
  }

  // 구매 금액을 입력받고, 구매 가능한 로또 수량을 계산하여 출력
  async handlePurchase() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    const ticketCount = Math.floor(purchaseAmount / 1000);
    OutputView.displayLottoCount(ticketCount); // 구매한 로또 수량 출력
    return purchaseAmount;
  }

  // 입력된 금액으로 로또를 생성하고, 생성된 로또 번호를 출력
  generateLottos(purchaseAmount) {
    const ticketCount = Math.floor(purchaseAmount / 1000);
    const lottos = Array.from({ length: ticketCount }, LottoService.generateLotto); // 로또 번호 자동 생성
    OutputView.displayLottoNumbers(lottos); // 생성된 로또 번호 출력
    return lottos;
  }

  // 당첨 번호와 보너스 번호를 입력받음
  async getWinningNumbersAndBonus() {
    const winningNumbers = await InputView.getWinningNumbers(); // 당첨 번호 입력
    const bonusNumber = await InputView.getBonusNumber(); // 보너스 번호 입력
    return { winningNumbers, bonusNumber };
  }

  // 당첨 결과를 계산하고, 당첨 통계 및 수익률을 출력
  showResults(lottos, purchaseAmount, winningNumbers, bonusNumber) {
    const summary = this.calculateResults(lottos, winningNumbers, bonusNumber); // 당첨 결과 계산
    OutputView.displayWinningStatistics(summary); // 당첨 통계 출력
    this.displayYield(purchaseAmount, summary); // 수익률 출력
  }

  // 로또 번호와 당첨 번호를 비교하여 당첨 결과를 계산
  calculateResults(lottos, winningNumbers, bonusNumber) {
    return LottoService.checkWinning(lottos, winningNumbers, bonusNumber)
      .reduce((acc, result) => {
        if (result) acc[result] = (acc[result] || 0) + 1; // 당첨 결과를 요약하여 저장
        return acc;
      }, {});
  }

  // 총 수익률을 계산하고 출력
  displayYield(purchaseAmount, summary) {
    const totalPrize = LottoService.calculateTotalPrize(summary); // 총 당첨금 계산
    const yieldRate = ((totalPrize / purchaseAmount) * 100).toFixed(1); // 수익률 계산
    OutputView.displayYield(yieldRate); // 수익률 출력
  }
}

export default App;

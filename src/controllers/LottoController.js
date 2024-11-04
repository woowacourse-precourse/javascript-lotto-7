import InputView from '../views/InputView.js'; 
import OutputView from '../views/OutputView.js'; 
import LottoService from '../services/LottoService.js'; 
import Lotto from '../models/Lotto.js'; 

class LottoController {
  async start() {
    try {
      // 게임 로직 전체 제어
      // 1. 사용자 입력 처리 및 유효성 검사
      // - 구매 금액을 입력받고 유효성 검사 후 로또 티켓 수 계산
      const purchaseAmount = await InputView.getPurchaseAmount();
      const ticketCount = Math.floor(purchaseAmount / 1000);

      // 2. Model과 View를 연결하여 데이터 흐름 관리
      // - 구매한 로또 티켓 생성 및 출력
      const lottos = Array.from({ length: ticketCount }, () => LottoService.generateLotto());
      OutputView.displayLottoCount(ticketCount);
      OutputView.displayLottoNumbers(lottos);

      // - 당첨 번호와 보너스 번호 입력 및 검증
      const winningNumbers = await InputView.getWinningNumbers();
      const bonusNumber = await InputView.getBonusNumber();

      // 3. 당첨 결과 계산 및 출력
      // - 로또 결과 비교 및 통계 생성
      const results = LottoService.checkWinning(lottos, winningNumbers, bonusNumber);
      const summary = results.reduce((acc, result) => {
        if (result) acc[result] = (acc[result] || 0) + 1;
        return acc;
      }, {});

      // - 결과 출력 및 수익률 계산 후 출력
      OutputView.displayWinningStatistics(summary);
      const totalPrize = LottoService.calculateTotalPrize(summary);
      const yieldRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
      OutputView.displayYield(yieldRate);
    } catch (error) {
      // 4. 예외 처리 및 재시도 로직 구현
      // - 예외 발생 시 에러 메시지 출력 및 재시도
      console.error(error.message);
    }
  }
}

export default LottoController; 
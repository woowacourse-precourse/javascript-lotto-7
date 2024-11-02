// 전체 로또 프로그램 흐름 제어
// issueTickets : 입력한 구입 금액에 따라 로또 티켓 발급
// checkResults : 당첨 결과 계산 및 수익률 반환

// LottoControllers
// Lotto : getUserInput, validation, parseUserInput
// LottoIssuer: getUserInput, validation, parseUserInput, lottoDisplay
// LottoMatcher: winningNumbers, winningRank
// ProfitCalculator: profitCalculator
import Lotto from './Lotto.js';
import LottoValidator from './LottoValidator.js';

class LottoControllers {
  createLotto(numbers, bonusNumber) {
    return new Lotto(numbers);
  }
}

export default LottoControllers;

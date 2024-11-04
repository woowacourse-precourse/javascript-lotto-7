import { Random } from '@woowacourse/mission-utils';
import {
  LOTTO_PRICE, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_COUNT,
  PRIZE_CONDITION,
  PROFIT_ROUND_DECIMAL_PLACE,
  PRIZE_AMOUNT
} from "./lottoConstants.js";
import Lotto from './Lotto.js';

class LottoUtility {
  calculateLottoCount(amount) {
    return amount / LOTTO_PRICE;
  }

  generateLottoTickets(lottoCount) {
    let LottoTickets = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT
      );
      const lottoTicket = new Lotto(lottoNumbers);
      LottoTickets.push(lottoTicket);
    }
    return LottoTickets;
  }

  checkWinningRank(lottoTickets, winningLotto, bonusNumber) {
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    lottoTickets.forEach(lottoTicket => {
      const matchCount = this.countMatchNumbers(lottoTicket, winningLotto);
      this.updateResult(result, matchCount, lottoTicket, bonusNumber);
    });

    return result;
  }

  countMatchNumbers(lottoTicket, winningLotto) {
    const ticketNumbers = lottoTicket.getNumbers();
    const winningNumbers = winningLotto.getNumbers();

    return ticketNumbers.filter(number => winningNumbers.includes(number)).length;
  }

  updateResult(result, matchCount, lottoTicket, bonusNumber) {
    if (matchCount === PRIZE_CONDITION.FIRST.MATCH_COUNT) {
      result.first += 1;
      return;
    }
    if (matchCount === PRIZE_CONDITION.THIRD.MATCH_COUNT && lottoTicket.getNumbers().includes(bonusNumber)) {
      result.second += 1;
      return;
    }
    if (matchCount === PRIZE_CONDITION.THIRD.MATCH_COUNT) {
      result.third += 1;
      return;
    }
    if (matchCount === PRIZE_CONDITION.FOURTH.MATCH_COUNT) {
      result.fourth += 1;
      return;
    }
    if (matchCount === PRIZE_CONDITION.FIFTH.MATCH_COUNT) {
      result.fifth += 1;
    }
  }

  calculateProfitRate(winningResult, amount) {
    const totalPrize =
      (winningResult.first * PRIZE_AMOUNT.FIRST) +
      (winningResult.second * PRIZE_AMOUNT.SECOND) +
      (winningResult.third * PRIZE_AMOUNT.THIRD) +
      (winningResult.fourth * PRIZE_AMOUNT.FOURTH) +
      (winningResult.fifth * PRIZE_AMOUNT.FIFTH);
    const profitRate = ((totalPrize / amount) * 100).toFixed(PROFIT_ROUND_DECIMAL_PLACE);
    return profitRate;
  }
}

export default LottoUtility;
import { makeError } from './View/Error.js';
import { ERROR_MESSAGE } from './View/Error.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.checkDuplicate();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      makeError(ERROR_MESSAGE.WINNING_NUMBER_LENGTH);
    }
  }

  makeLottoTicketsAsCount(ticketCount) {
    const tickets = [];

    for (let i = 0; i < ticketCount; i++) {
      const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(ticket);
    }

    return tickets;
  }

  getAllofLottoTicketsResult(tickets, winnerRankCount, bonusNumber) {
    let rankCount = winnerRankCount;
    tickets.forEach((ticket) => {
      const matchInfo = this.getMatchInfo(ticket, bonusNumber);
      rankCount = this.updateWinnerRankCount(matchInfo, rankCount);
    });

    return rankCount;
  }

  getMatchInfo(ticket, bonusNumber) {
    const matchingNumbers = ticket.filter((elem) =>
      this.#numbers.includes(elem)
    );

    if (matchingNumbers.length === 5) {
      return {
        hasBonusNumber: ticket.includes(bonusNumber),
        mathCount: matchingNumbers.length,
      };
    }

    return { hasBonusNumber: null, mathCount: matchingNumbers.length };
  }

  updateWinnerRankCount(matchingInfo, winnerRank) {
    switch (matchingInfo.mathCount) {
      case 6:
        winnerRank.FIRST++;
        break;
      case 5:
        if (matchingInfo.hasBonusNumber) {
          winnerRank.SECOND++;
          break;
        }
        winnerRank.THIRD++;
        break;
      case 4:
        winnerRank.FOURTH++;
        break;
      case 3:
        winnerRank.FIFTH++;
        break;
      default:
        break;
    }

    return winnerRank;
  }

  checkDuplicate() {
    const set = new Set(this.#numbers);

    if (this.#numbers.length !== set.size) {
      makeError(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATION);
    }
  }
}

export default Lotto;

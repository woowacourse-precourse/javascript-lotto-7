import { Console } from '@woowacourse/mission-utils';
import { WINNING_HISTORY } from './Constants.js';

class VerifyingLotto {
  #isMatchBonusNumber = false;
  #winningHistory = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };

  getWinningHistory() {
    return this.#winningHistory;
  }

  #matchNumber(winningNumbers, number) {
    if(winningNumbers.includes(number)) {
      return 1;
    } else {
      return 0;
    }
  }

  #matchBonusNumber(bonusNumber, number) {
    if(bonusNumber === number) {
      return true;
    } else {
      return false;
    }
  }

  #verifyLotto(winningNumbers, bonusNumber, numbers) {
    let matchCount = 0;
    numbers.forEach((number) => {
      matchCount += this.#matchNumber(winningNumbers, number);
      this.#isMatchBonusNumber = this.#matchBonusNumber(bonusNumber, number);
    });
    return matchCount;
  }

  #checkSecondOrThird() {
    if(this.#isMatchBonusNumber) {
      ++this.#winningHistory.SECOND;
    } else {
      ++this.#winningHistory.THIRD;
    }
  }

  #saveWinningHistory(matchCount) {
    switch(matchCount) {
      case 3 :
        ++this.#winningHistory.FIFTH;
        break;
      case 4 :
        ++this.#winningHistory.FOURTH;
        break;
      case 5 :
        this.#checkSecondOrThird();
        break;
      case 6 :
        ++this.#winningHistory.FIRST;
        break;
    }
  }

  verifyWinningLottoList(winningNumbers, bonusNumber, publishedLottoList) {
    publishedLottoList.forEach((lotto) => {
      const matchCount = this.#verifyLotto(winningNumbers, bonusNumber, lotto.getNumbers());
      this.#saveWinningHistory(matchCount);
      this.#isMatchBonusNumber = false;
    });
  }

  printWinningHistory() {
    Console.print(WINNING_HISTORY.TITLE);
    Console.print(WINNING_HISTORY.FIFTH + this.#winningHistory.FIFTH + '개');
    Console.print(WINNING_HISTORY.FOURTH + this.#winningHistory.FOURTH + '개');
    Console.print(WINNING_HISTORY.THIRD + this.#winningHistory.THIRD + '개');
    Console.print(WINNING_HISTORY.SECOND + this.#winningHistory.SECOND + '개');
    Console.print(WINNING_HISTORY.FIRST + this.#winningHistory.FIRST + '개');
  }
}

export default VerifyingLotto;

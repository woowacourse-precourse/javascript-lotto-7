import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { IO_MESSAGES, ERROR_MESSAGES } from '../constants/messages.js';

class App {
  async run() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = Number(
          await Console.readLineAsync(IO_MESSAGES.PURCHASE_AMOUNT),
        );
        if (isNaN(purchaseAmount)) {
          throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT);
        }
        if (purchaseAmount < 1000) {
          throw new Error(ERROR_MESSAGES.MINIMUM_AMOUNT);
        }
        if (purchaseAmount > Number.MAX_SAFE_INTEGER) {
          throw new Error(ERROR_MESSAGES.MAXIMUM_AMOUNT);
        }
        if (purchaseAmount % 1000 !== 0) {
          throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottoCount = purchaseAmount / 1000;
    const lottoList = Array.from({ length: lottoCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      return lotto;
    });

    Console.print(IO_MESSAGES.PURCHASE_COUNT(lottoCount));
    lottoList.forEach((lotto) => {
      Console.print(IO_MESSAGES.LOTTO_NUMBERS(lotto.getNumbers()));
    });

    let winningNumbers;
    while (true) {
      try {
        winningNumbers = await Console.readLineAsync(
          IO_MESSAGES.WINNING_NUMBERS,
        );
        if (!winningNumbers.includes(',')) {
          throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_FORMAT);
        }
        if (winningNumbers[0] === ',' || winningNumbers.at(-1) === ',') {
          throw new Error(ERROR_MESSAGES.INVALID_COMMA_POSITION);
        }
        winningNumbers = winningNumbers.split(',').map(Number);
        if (winningNumbers.length !== 6) {
          throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_LENGTH);
        }
        if (new Set(winningNumbers).size !== 6) {
          throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
        }
        winningNumbers.forEach((x) => {
          if (!Number.isInteger(x) || x < 1 || x > 45) {
            throw new Error(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE);
          }
        });
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = Number(
          await Console.readLineAsync(IO_MESSAGES.BONUS_NUMBER),
        );
        if (isNaN(bonusNumber)) {
          throw new Error(ERROR_MESSAGES.BONUS_NUMBER_NAN);
        }
        if (!(bonusNumber >= 1 && bonusNumber <= 45)) {
          throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE);
        }
        if (winningNumbers.includes(bonusNumber)) {
          throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let money = 0;
    let matchTable = new Array(5).fill(0);

    for (let lotto of lottoList) {
      const numbers = lotto.getNumbers();
      let matchCount = 0;
      for (let number of winningNumbers) {
        if (numbers.includes(number)) {
          matchCount += 1;
        }
      }
      if (matchCount === 6) {
        matchTable[0] += 1;
        money += 2000000000;
      }
      if (matchCount === 5 && numbers.includes(bonusNumber)) {
        matchTable[1] += 1;
        money += 30000000;
      }
      if (matchCount === 5) {
        matchTable[2] += 1;
        money += 1500000;
      }
      if (matchCount === 4) {
        matchTable[3] += 1;
        money += 50000;
      }
      if (matchCount === 3) {
        matchTable[4] += 1;
        money += 5000;
      }
    }

    const profitRate = ((money / purchaseAmount) * 100).toFixed(1);

    Console.print(IO_MESSAGES.STATISTICS_HEADER);
    Console.print(IO_MESSAGES.MATCH_3(matchTable[4]));
    Console.print(IO_MESSAGES.MATCH_4(matchTable[3]));
    Console.print(IO_MESSAGES.MATCH_5(matchTable[2]));
    Console.print(IO_MESSAGES.MATCH_5_BONUS(matchTable[1]));
    Console.print(IO_MESSAGES.MATCH_6(matchTable[0]));
    Console.print(IO_MESSAGES.PROFIT_RATE(profitRate));
  }
}

export default App;

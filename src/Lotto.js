import { validateLottoNumbers } from './error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLottoNumbers(numbers);  
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  checkWinningNumbers(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter(num => winningNumbers.includes(num)).length;
    const bonusMatch = this.#numbers.includes(bonusNumber);
    return { matchCount, bonusMatch };
  }

  static calculateResults(tickets, winningNumbers, bonusNumber) {
    const winnings = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

    tickets.forEach(ticket => {
      const { matchCount, bonusMatch } = ticket.checkWinningNumbers(winningNumbers, bonusNumber);
      if (matchCount === 6) winnings[6]++;
      else if (matchCount === 5 && bonusMatch) winnings[5.5]++;
      else if (matchCount === 5) winnings[5]++;
      else if (matchCount === 4) winnings[4]++;
      else if (matchCount === 3) winnings[3]++;
    });

    const totalWinnings =
      winnings[3] * 5000 +
      winnings[4] * 50000 +
      winnings[5] * 1500000 +
      winnings[5.5] * 30000000 +
      winnings[6] * 2000000000;

    return { winnings, totalWinnings };
  }
}

export default Lotto;

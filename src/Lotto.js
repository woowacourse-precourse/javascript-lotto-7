import { Console, Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    numbers = this.#createRandom();
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.\n");
    }
    for (const number of numbers) {
      if (isNaN(number) || number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n");
      }
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.\n");
    }
  }

  #createRandom() {
    const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomArray.sort((a, b) => a - b);
    return randomArray;
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  async getWinNumbers() {
    let winNumbers;
    while (true) {
      try {
        winNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        Console.print('');
        winNumbers = winNumbers.split(",").map(number => parseInt(number.trim(), 10));
        this.#validate(winNumbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winNumbers;
  }

  async getBonusNumber() {
    let winBonus;
    while (true) {
      try {
        winBonus = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        Console.print('');
        winBonus = parseInt(winBonus.trim(), 10);

        if (isNaN(winBonus) || winBonus < 1 || winBonus > 45) {
          throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.\n");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winBonus;
  }

  checkWinNumbers(winNumbersArray) {
    return this.#numbers.filter(number => winNumbersArray.includes(number)).length;
  }

  calculatePrize(matchCount, isBonusMatch = false) {
    if (matchCount === 6)
      return 2000000000;
    if (matchCount === 5) {
      if (isBonusMatch) { // 보너스 번호 추가 일치
        return 30000000;
      } else {
        return 1500000;
      }
    }
    if (matchCount === 4)
      return 50000;
    if (matchCount === 3)
      return 5000;

    return 0;
  }
}

export default Lotto;
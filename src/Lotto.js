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
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  
  #createRandom() {
    const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6);

    randomArray.sort((a, b) => a - b);// 오름차순 정렬

    return randomArray;
  }

  async getWinNumbers() {
    let winNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    Console.print('');

    const winArray = winNumbers.split(",").map(number => parseInt(number.trim(), 10));

    return winArray;
  }

  async getBonusNumber() {
    let winBonus = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    Console.print('');

    return parseInt(winBonus.trim());
  }

  printNumbers() {    
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  checkWinNumbers(winNumbersArray) {
    const matchingNumbers = this.#numbers.filter(number => winNumbersArray.includes(number));

    return matchingNumbers.length;
  }

  countStatistics(map, key){
    if(key in map)
      map.set(key, map.get(key) + 1);
    else
      map.set(key, 0);

    return map;
  }

  #setPrizeMoney(amount) {
    let prizeMoney = 0;

    switch (amount) {
      case 3:
        prizeMoney = 5000;
        break;
      case 4:
        prizeMoney = 50000;
        break;
      case 5:
        prizeMoney = 1500000;
        break;
      case 6:
        prizeMoney = 2000000000;
        break;
      default:
        prizeMoney = 0;
    }

    return prizeMoney;
  }

  printStatistics(amountArray){
    Console.print(`3개 일치 (5,000원) - ${amountArray[0]}개\n`);
    Console.print(`4개 일치 (50,000원) - ${amountArray[1]}개\n`);
    Console.print(`5개 일치 (1,500,000원) - ${amountArray[2]}개\n`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${amountArray[3]}개\n`);
    Console.print(`6개 일치 (2,000,000,000원) - ${amountArray[4]}개\n`);
  }
}

export default Lotto;
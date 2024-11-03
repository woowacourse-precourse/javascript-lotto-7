import { Console } from "@woowacourse/mission-utils";

class Lotto {
  static #result = {3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0}; // 7 >> 5개 일치, 보너스 볼 일치

  #numbers;
  #isBonus;
  #correctCnt;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
    this.#correctCnt = 0;
    this.#isBonus = false;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #printNumbers(){
    Console.print(this.#numbers);
  }

  getCorrectCnt(){
    return this.#correctCnt;
  }

  getIsBonus(){
    return this.#isBonus;
  }

  // TODO: 추가 기능 구현
  checkNumbers(winningNumbers){
    this.#numbers.forEach((number)=>{
      if(winningNumbers.includes(number)){
        this.#numbers += 1;
      }
    })
  }

  isBonus(BONUS_NUMBER){
    if(this.#numbers.includes(BONUS_NUMBER)){
      this.#isBonus = true;
    }
  }

  static setResult(count){
    this.#result[count]++;
  }
}

export default Lotto;

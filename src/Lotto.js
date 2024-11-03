import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #duplicate(numbers){
    const numberSet = new Set(numbers);
    if(numberSet.size !== 6){
      throw new Error("[ERROR] 중복된 값이 있습니다.");
    }
  }

  #printNumbers(){
    let string = "[";
    this.#numbers.forEach((number, index)=>{
      if(index === 5){
        string += number;
        return;
      }
      string += number + ", ";
    })
    string += "]"
    Console.print(string);
  }

  // TODO: 추가 기능 구현
  checkNumbers(winningNumbers){
    let correctCnt = 0;
    this.#numbers.forEach((number)=>{
      if(winningNumbers.includes(number)){
        correctCnt += 1;
      }
    })
    return correctCnt;
  }

  isBonus(BONUS_NUMBER){
    return this.#numbers.includes(BONUS_NUMBER);
  }

}

export default Lotto;

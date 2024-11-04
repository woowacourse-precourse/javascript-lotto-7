import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(new Set(numbers).size !== 6){
      throw new Error("[ERROR] 중복값이 존재합니다.");
    }
    if(!numbers.every((number)=> 1<=number && number<=45)){
      throw new Error("[ERROR] 로또 번호는 1부터 45까지 입니다.");
    }
  }

  getNumbers(){
    const numbers = this.#numbers.map(number =>  Number(number));
    return numbers;
  }
}

export default Lotto;

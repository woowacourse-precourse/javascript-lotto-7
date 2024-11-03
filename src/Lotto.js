import {Console} from "@woowacourse/mission-utils";
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
    if(numbers.length !== new Set(numbers).size)
      throw new Error("[ERROR] 로또 번호는 unique 해야합니다");
  }

  printnums(){
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  wincheck(winnums,bonus){
    let cnt = 0;
    let isbonus = false;
    this.#numbers.forEach((num)=>{
      if(winnums.includes(num)) cnt++;
    })
    if(this.#numbers.includes(bonus)) isbonus=true;
    return [cnt, isbonus];
  }

  printwiiner(){

  }

}

export default Lotto;

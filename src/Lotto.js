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

  getnumbers(){
    return this.#numbers;
  }

}

export default Lotto;

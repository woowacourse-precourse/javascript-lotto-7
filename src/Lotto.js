import {Console} from '@woowacourse/mission-utils';
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
    if (numbers.filter((num, index) => numbers.indexOf(num) !== index).length > 0) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
    if (numbers.filter((num) => isNaN(num)).length > 0) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
    if(numbers.filter((num)=>num<1||num>45).length > 0){
      throw new Error('[ERROR] 로또 번호의 범위는 1~45까지입니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumbers(){
    return this.#numbers;
  }

  printNumbers(){
    const result = this.#numbers.join(', ');
    Console.print(`[${result}]`);

  }
}

export default Lotto;

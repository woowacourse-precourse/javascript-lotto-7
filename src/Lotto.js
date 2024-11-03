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

  async getBonusNumbers() {
    Console.print('\n보너스 번호를 입력해주세요.');
    const bonusNumber = await Console.readLineAsync('');
    if(!(1<=bonusNumber && bonusNumber<=45)){
      throw new Error("[ERROR] 1부터 45 범위 내의 번호 1개를 입력해주세요.");
    }
    if(this.#numbers.includes(bonusNumber)){
      throw new Error("[ERROR] 이미 입력한 번호입니다.");
    }
    return Number(bonusNumber);
  }
}

export default Lotto;

import {Random} from '@woowacourse/mission-utils'

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.sortNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  sortNumber(numbers){
    numbers = numbers.sort((a,b)=> a - b);
  }

  isNumberWin(number, winNumbers){
    winNumbers.map((winNum)=>{
      if(number === winNum){
        return true;
      }
    })
    return false;
  }

  isWin(numbers, winNumbers){
    let winNumCount = 0;
    numbers.map((num)=>{
      if(this.isNumberWin(num, winNumbers)){
        winNumCount++;
      }
    });
    return winNumCount;
  }

  getNumber(){
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;

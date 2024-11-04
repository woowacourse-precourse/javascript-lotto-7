import {Random} from '@woowacourse/mission-utils'
import * as Console from "node:console";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.sortNumber(numbers);
    this.isUnique(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isUnique(numbers){
    numbers.map((num, index)=>{
      this.checkDupNumber(num, index, numbers);
    })
  }
  checkDupNumber(target, targetIndex, numbers){
    numbers.map((num, index)=>{
      if(num === target && targetIndex !== index){
        throw new Error("[ERROR] : 로또 번호는 중복될 수 없습니다.")
      }
    })
  }

  checkNumberRange(numbers){
    const minNum = 1;
    const maxNum = 45;
    numbers.map((num)=>{
      if(num > maxNum || num < minNum){
        throw new Error("[ERROR] : 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    })
  }

  sortNumber(numbers){
    numbers = numbers.sort((a,b)=> a - b);
  }

  isNumberWin(number, winNumbers){
    let win = false;
    winNumbers.map((winNum)=>{
      winNum = Number.parseInt(winNum);
      if(number === winNum){
        win = true;
      }
    })
    return win;
  }

  isLottoWin(targetLotto, winLotto){
    let winNumCount = 0;
    targetLotto.getNumber().map((targetNum)=>{
      if(this.isNumberWin(targetNum, winLotto.getNumber())){
        winNumCount++;
      }
    });

    return winNumCount;
  }

  isBonus(bonusNumber){
    let winBonus = false;
    this.#numbers.map((num)=>{
      if(num === Number.parseInt(bonusNumber)){
        winBonus = true;
      }
    });
    return winBonus;
  }

  getNumber(){
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;

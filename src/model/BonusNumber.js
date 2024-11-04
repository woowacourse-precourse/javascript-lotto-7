class BonusNumber { 
  #value;
  constructor(number){ 
    this.#validate(number);
    this.#value = number;
  }

  #validate(number, lotto){
    if (number < 1 || 45 < number) { 
      throw new Error('[ERROR] 범위를 벗어난 숫자입니다.')
    }
    if (lotto.has(number)){
      throw new Error('[ERROR] 당첨범호에 포함된 숫자는 보너스 번호로 사용할 수 없습니다.');
    }
  }

  get value (){
    return this.value;
  }

}
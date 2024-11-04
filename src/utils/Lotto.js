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
  }


  static validateWinNumber(WinNumberArray) {
    WinNumberArray.forEach(element => {
      Lotto.validateNumberRange(element)
    });

    if (new Set(WinNumberArray).size < 6) {
        throw new Error('[ERROR]중복 및 공백 없는 6개의 번호만 유효합니다.');
    }
    if(new Set(WinNumberArray).size > 6){
        throw new Error('[ERROR]당첨 번호는 최대 6개입니다.')
    }
    this.winNumber = WinNumberArray;
  }

  static validateBonusNumber(bonusNumber,winNumber) {
      Lotto.validateNumberRange(bonusNumber)
      if(winNumber.includes(bonusNumber)){
        throw new Error('[ERROR] 당첨 번호와 보너스 번호가 중복되면 안 됩니다.')
      }
  }

  static validateNumberRange(number){
    if(number>45||number<1){throw new Error('[ERROR] 1~45까지만 허용 됩니다.')}
  }

}

export default Lotto;

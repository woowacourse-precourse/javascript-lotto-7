class Lotto_bonus {
  
    constructor(inputBonusNumber) {
      this.validate(inputBonusNumber);
      this.bonusNumber = Number(inputBonusNumber);
      return this.bonusNumber;
    }
  
    validate(inputBonusNumber) {
        // 예외 처리
    }

  }
  
  export default Lotto_bonus;
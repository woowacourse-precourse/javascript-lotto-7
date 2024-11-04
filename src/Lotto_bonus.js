class Lotto_bonus {
  
    constructor(inputBonusNumber) {
      this.validate(inputBonusNumber);
      this.bonusNumber = Number(inputBonusNumber);
      return this.bonusNumber;
    }
  
    validate(inputBonusNumber) {
      if (inputBonusNumber.length !== 1) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }
      
      if (inputBonusNumber < 1 || 45 < inputBonusNumber) {
        throw new Error("[ERROR] 로또 번호는 1 - 45 만 가능합니다.");
      }
  
      if (isNaN(inputBonusNumber)) {
        throw new Error("[ERROR] 로또 번호에 문자가 포함될 수 없습니다.");
      }
    }

  }
  
  export default Lotto_bonus;
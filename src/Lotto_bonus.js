
class Lotto_bonus {
  
    constructor(inputBonusNumber, numbers) {
      this.validate(inputBonusNumber, numbers);
      this.bonusNumber = Number(inputBonusNumber);
      return this.bonusNumber;
    }
  
    validate(inputBonusNumber, numbers) {
      if (inputBonusNumber.length !== 1) {
        throw new Error("[ERROR] 보너스 번호를 1개 입력해야 합니다.");
      }
      
      if (inputBonusNumber < 1 || 45 < inputBonusNumber) {
        throw new Error("[ERROR] 보너스 번호는 1 - 45 만 가능합니다.");
      }
  
      if (isNaN(inputBonusNumber)) {
        throw new Error("[ERROR] 보너스 번호에 문자가 포함될 수 없습니다.");
      }
      
      if (numbers.indexOf(Number(inputBonusNumber)) != -1){
        throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.");
      }
    }
  }
  
  export default Lotto_bonus;
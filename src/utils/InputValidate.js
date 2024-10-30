class InputValidate{
  inputExist(input) {
    if (!input){
      throw new Error("[ERROR] 값을 입력하세요.");
    }
  }
  inputType(input) {
    if (isNaN(Number(input))){
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  }
  inputUnit(input) {
    if (input%1000 !== 0){
      throw new Error("[ERROR] 1000원 단위의 금액으로 입력하세요.");
    }
  }
  inputRange(input) {
    if(input<0) {
      throw new Error("[ERROR] 양수를 입력하세요.");
    }
  }
  lottoNumberRange(input) {
    for (let number of input){
      if(number > 45 || number < 1){
        throw new Error("[ERROR] 당첨번호는 1~45 사이의 숫자로 입력하세요.");
      }
    }
  }
  DuplicateLottoNumber(input) {
    const noDuplicate = new Set(input);
    if(input.length !== noDuplicate.size){
        throw new Error("[ERROR] 당첨번호는 중복없이 입력해야 합니다.");
    }
  }
  lottoNumberLength(input) {
    if (input.length !== 6){
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  lottoNumberType(input) {
    for (let number of input){
      if (isNaN(Number(number))){
        throw new Error("[ERROR] 숫자를 쉼표(,) 구분자로 나누어 입력해야 합니다.");
      }
    }
  }

  bonusNumberType(input) {
    if (isNaN(Number(input))){
      throw new Error("[ERROR] 보너스 번호는 하나의 숫자로 입력하세요.");
    }
  }
  bonusNumberRange(input) {
    if (input > 45 || input < 1){
      throw new Error("[ERROR] 보너스 번호는 1~45사이의 숫자로 입력하세요.");
    }
  }
  duplicateBonusNumber(bonusNumber, lottoNumber) {
    if (lottoNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복되면 안됩니다."); 
    }
  }

  priceInputValidate(input) {
    try{
      this.inputExist(input);
      this.inputType(input);
      this.inputUnit(input);
      this.inputRange(input);
      return null;
    } catch(error) {
      return error.message;
    }

  }

  lottoNumberValidate(input) {
    this.inputExist(input);
    this.lottoNumberRange(input);
    this.lottoNumberLength(input);
    this.DuplicateLottoNumber(input);
    this.lottoNumberType(input);
  }

  bonusNumberValidate(bonusNumber, lottoNumber) {
    this.inputExist(bonusNumber);
    this.duplicateBonusNumber(bonusNumber, lottoNumber);
    this.bonusNumberType(bonusNumber);
    this.bonusNumberRange(bonusNumber);
  }

};

export default InputValidate;
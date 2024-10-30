class InputValidate{
  async inputExist(input) {
    if (!input){
      throw new Error("[ERROR] 값을 입력하세요.");
    }
  }
  async inputType(input) {
    if (isNaN(Number(input))){
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  }
  async inputUnit(input) {
    if (input%1000 !== 0){
      throw new Error("[ERROR] 1000원 단위의 금액으로 입력해세요.");
    }
  }
  async lottoNumberRange(input) {
    const lottoNumbers = input.split(',');
    for (let number of lottoNumbers){
      if(number > 45 || number < 1){
        throw new Error("[ERROR] 당첨번호는 1~45 사이의 숫자로 입력하세요.");
      }
    }
  }
  async DuplicateLottoNumber(input) {
    const lottoNumbers = input.split(',');
    const noDuplicate = new Set(lottoNumbers);
    if(lottoNumbers !== noDuplicate){
        throw new Error("[ERROR] 당첨번호는 중복없이 입력해야 합니다.");
    }
  }
  async lottoNumberLength(input) {
    const lottoNumbers = input.split(',');
    if (lottoNumbers.length !== 6){
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  async lottoNumberType(input) {
    const lottoNumbers = input.split(',');
    for (let number of lottoNumbers){
      if (isNaN(Number(number))){
        throw new Error("[ERROR] 숫자를 쉼표(,) 구분자로 나누어 입력해야 합니다.");
      }
    }
  }

  async bonusNumberType(input) {
    if (isNaN(Number(input))){
      throw new Error("[ERROR] 보너스 번호는 하나의 숫자로 입력하세요.");
    }
  }
  async bonusNumberRange(input) {
    if (input > 45 || input < 1){
      throw new Error("[ERROR] 보너스 번호는 1~45사이의 숫자로 입력하세요.");
    }
  }
  async DuplicateBonusNumber(bonusNumber, lottoNumber) {
    if (lottoNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복되면 안됩니다."); 
    }
  }

  async priceInputValidate(input) {
    this.inputExist(input);
    this.inputType(input);
    this.inputUnit(input);
  }

  async lottoNumberValidate(input) {
    this.inputExist(input);
    this.lottoNumberRange(input);
    this.lottoNumberLength(input);
    this.DuplicateLottoNumber(input);
    this.lottoNumberType(input);
  }

  async bonusNumberValidate(bonusNumber, lottoNumber) {
    this.inputExist(bonusNumber);
    this.DuplicateBonusNumber(bonusNumber, lottoNumber);
    this.bonusNumberType(bonusNumber);
    this.bonusNumberRange(bonusNumber);
  }

};

export default InputValidate;
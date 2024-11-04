import {ERROR} from "../constants/error.js";

class InputValidate{
  inputExist(input) {
    if (!input){
      throw new Error(ERROR.EMPTY_INPUT);
    }
  }
  inputType(input) {
    if (isNaN(Number(input))){
      throw new Error(ERROR.INVALID_PRICE_TYPE);
    }
  }
  inputUnit(input) {
    if (input%1000 !== 0){
      throw new Error(ERROR.INVALID_PRICE_UNIT);
    }
  }
  inputRange(input) {
    if(input<0) {
      throw new Error(ERROR.INVALID_LOTTO_RANGE);
    }
  }
  lottoNumberRange(input) {
    for (let number of input){
      if(number > 45 || number < 1){
        throw new Error(ERROR.INVALID_LOTTO_RANGE);
      }
    }
  }
  duplicateLottoNumber(input) {
    const noDuplicate = new Set(input);
    if(input.length !== noDuplicate.size){
        throw new Error(ERROR.INVALID_LOTTO_LENGTH);
    }
  }
  lottoNumberLength(input) {
    if (input.length !== 6){
        throw new Error(ERROR.INVALID_LOTTO_LENGTH);
    }
  }

  lottoNumberType(input) {
    for (let number of input){
      if (isNaN(Number(number))){
        throw new Error(ERROR.INVALID_LOTTO_TYPE);
      }
    }
  }

  bonusNumberType(input) {
    if (isNaN(Number(input))){
      throw new Error(ERROR.INVALID_BONUS_NUMBER_TYPE);
    }
  }
  bonusNumberRange(input) {
    if (input > 45 || input < 1){
      throw new Error(ERROR.INVALID_BONUS_NUMBER_RANGE);
    }
  }
  duplicateBonusNumber(bonusNumber, lottoNumber) {
    if (lottoNumber.includes(bonusNumber)) {
      throw new Error(ERROR.BONUS_NUMBER_DUPLICATE); 
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
    try {
      this.inputExist(input);
      this.lottoNumberRange(input);
      this.lottoNumberLength(input);
      this.duplicateLottoNumber(input);
      this.lottoNumberType(input);    
      return null;  
    } catch(error) {
      return error.message;
    }
  }

  bonusNumberValidate(bonusNumber, lottoNumber) {
    try {
      this.inputExist(bonusNumber);
      this.duplicateBonusNumber(bonusNumber, lottoNumber);
      this.bonusNumberType(bonusNumber);
      this.bonusNumberRange(bonusNumber);
      return null;
    } catch(error) {
      return error.message;
    }
  }
};

export default InputValidate;

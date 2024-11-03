import { BONUS_NUMBER_ERROR, ERROR, LOTTO_ERROR, PRICE_ERROR } from "../constants/error.js";

class InputValidate{
  inputExist(input) {
    if (!input){
      throw new Error(ERROR.INPUT_BLANK_ERROR);
    }
  }
  inputType(input) {
    if (isNaN(Number(input))){
      throw new Error(PRICE_ERROR.PRICE_TYPE_ERROR);
    }
  }
  inputUnit(input) {
    if (input%1000 !== 0){
      throw new Error(PRICE_ERROR.INPUT_UNIT_ERROR);
    }
  }
  inputRange(input) {
    if(input<0) {
      throw new Error(PRICE_ERROR.INPUT_RANGE_ERROR);
    }
  }
  lottoNumberRange(input) {
    for (let number of input){
      if(number > 45 || number < 1){
        throw new Error(LOTTO_ERROR.LOTTO_RANGE_ERROR);
      }
    }
  }
  duplicateLottoNumber(input) {
    const noDuplicate = new Set(input);
    if(input.length !== noDuplicate.size){
        throw new Error(LOTTO_ERROR.LOTTO_DUPLICATE_ERROR);
    }
  }
  lottoNumberLength(input) {
    if (input.length !== 6){
        throw new Error(LOTTO_ERROR.LOTTO_LENGTH_ERROR);
    }
  }

  lottoNumberType(input) {
    for (let number of input){
      if (isNaN(Number(number))){
        throw new Error(LOTTO_ERROR.LOTTO_TYPE_ERROR);
      }
    }
  }

  bonusNumberType(input) {
    if (isNaN(Number(input))){
      throw new Error(BONUS_NUMBER_ERROR.BONUS_NUMBER_TYPE_ERROR);
    }
  }
  bonusNumberRange(input) {
    if (input > 45 || input < 1){
      throw new Error(BONUS_NUMBER_ERROR.BONUS_NUMBER_RANGE_ERROR);
    }
  }
  duplicateBonusNumber(bonusNumber, lottoNumber) {
    if (lottoNumber.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER_ERROR.BONUS_NUMBER_DUPLICATE_ERROR); 
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
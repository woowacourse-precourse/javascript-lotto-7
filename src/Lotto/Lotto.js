import { Console } from "@woowacourse/mission-utils";
import { ERROR_INPUT_WINNUM_DUPLICATED, ERROR_INPUT_WINNUM_ISINTEGER, ERROR_INPUT_WINNUM_ISNAN, ERROR_INPUT_WINNUM_LENGTH, ERROR_INPUT_WINNUM_RANGE } from "../Util/ErrosMessages.js";

class Lotto {
  #numbers = {};

  constructor(numbers, bonus) {
    const splitArray = this.#validateNumbers(numbers);
    this.#numbers = {"winArray" : splitArray};
    const parsedBonus = this.#validateBonus(bonus);
    this.#numbers['bonus'] = parsedBonus;
  }



  #validateNumbers(numbers) {
    const splitArray = this.#splitArray(numbers)
    this.#validateDuplicatedNumbers(splitArray)
    this.#validateLength(splitArray)
    const parsedArray = splitArray.map(element => {
      this.#validateInteger(element)
      const parsedElement = parseInt(element)
      this.#validateRange(parsedElement)
      return parsedElement
    })
    return parsedArray
    
  }

  
  #validateBonus(bonus){
    this.#validateInteger(bonus);
    const parsedBonus = parseInt(bonus);
    this.#validateRange(parsedBonus);
    this.#validateDuplicatedBonusNuber(parsedBonus);
    return parsedBonus
  }

  #validateDuplicatedNumbers(array){
    const setArray = new Set(array)
    if([...setArray].length !== 6){
      throw Error(ERROR_INPUT_WINNUM_DUPLICATED)
    }

  }
  #validateDuplicatedBonusNuber(bonus){
    const numbersArray = this.#numbers['winArray']
    if(numbersArray.indexOf(bonus) !== -1){
      throw Error(ERROR_INPUT_WINNUM_DUPLICATED)
    }
  }
  #splitArray(str){
    return String(str).split(',');
  }

  #validateLength(numbers){
    if (numbers.length !== 6) {
      throw new Error(ERROR_INPUT_WINNUM_LENGTH);
    }
  }

  #validateInteger(number){
    if(isNaN(number)){
      throw new Error(ERROR_INPUT_WINNUM_ISNAN)
    }
    if(number % 1 !== 0){
      throw new Error(ERROR_INPUT_WINNUM_ISINTEGER)
    }
  }

  #validateRange(number){
    if(number < 1 || number > 45){
      throw new Error(ERROR_INPUT_WINNUM_RANGE)
    }
  }

  getWinArray(){
    return this.#numbers['winArray']
  }
  getBonus(){
    return this.#numbers['bonus']
  }

  // TODO: 추가 기능 구현
}

export default Lotto;

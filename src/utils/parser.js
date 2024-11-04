import { LOTTO } from "../constants/lotto.js";
import { numericStringRegex } from "../constants/regex.js";


export const parseNumber = (numberstring) =>{
  if(!numberstring) {
    throw new Error('[ERROR] 입력에 문제가 있습니다');
  }
  if(numericStringRegex.test(numberstring.trim())){
    return Number(numberstring.trim());
  }
  throw new Error('[ERROR] 숫자가 아닌 문자가 있습니다.');
}

export const parseWinnnngLotto = (input) => {
  return parseArray(input, LOTTO.SEPARATOR).map(parseNumber);
}

const parseArray = (arrayString, separator) => {
  if(!arrayString){
    throw new Error('[ERROR] 입력에 문제가 있습니다.');
  }
  return arrayString.split(separator);
}


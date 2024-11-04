const arrayStringRegex = /^[^]+(,\d+)+?$/

export const numberParser = (numberstring) =>{
  if(numericStringRegex.test(numberstring)){
    return Number(numberstring);
  }
  throw new Error('[ERROR] 숫자가 아닌 문자가 있습니다.');
}

export const arrayParser = (arrayString, separator) => {
  return arrayString.split(separator);
}
import {Console} from '@woowacourse/mission-utils'

export const validateNotNumber = (inputValue) => {
  const notNumber = new RegExp('[^0-9]+');
  if(notNumber.test(inputValue)){
    Console.print('[ERROR]');
    throw new Error('[ERROR]');
  }
}
export const validatePayDecimalNumber = (inputValue) => {
  const decimalNumber = new RegExp('[.]+');
  if(decimalNumber.test(inputValue)){
    Console.print('[ERROR]');
    throw new Error('[ERROR]입력 에러, 금액 입력 시 정수의 숫자만 입력해주세요.');
  }
}
export const validateNotThousandUnits = (inputValue) => {
  if(inputValue%1000 !== 0){
    Console.print('[ERROR]');
    throw new Error('[ERROR]구입 금액 에러, 1000원 단위 금액을 입력해주세요.')
  }
}
export const validateAnswerNumberForm = (inputValue) => {
  const matchWinningNumberFormat = new RegExp('(\\d\\s*,\\s*,\\s*\\d|,\\s*,|,\\s*$|[^\\d,\\s])');
  if(matchWinningNumberFormat.test(inputValue)){
    Console.print('[ERROR]');
    throw new Error('[ERROR]당첨 번호 에러, 입력한 당첨번호의 형식이 맞지 않습니다.');
  }
}
export const validateLottoNumberOutOfBounds = (inputValue) => {
  inputValue.forEach((element) => {
    if(element > 45 || element < 1){
      Console.print('[ERROR]');
      throw new Error('[ERROR]당첨 번호 에러, 로또 번호는 1에서 45사이의 숫자입니다.');
    }
  });
}
export const validateLottoOverlap = (numbers) => {
  if(new Set(numbers).size !== numbers.length){
    Console.print('[ERROR]');
    throw new Error('[ERROR]');
  }
}
export const validateBonusOverlap = (lottoTable, bonus) => {
  if(lottoTable[bonus-1] === 1){
    Console.print('[ERROR]');
    throw new Error('[ERROR]보너스 번호 에러, 보너스 번호에 중복이 있습니다.');
  }
}
export const validateLottoNumberAmount = (inputValue) => {
  if(inputValue.length > 6 || inputValue.length < 6){
    Console.print('[ERROR]');
    throw new Error('[ERROR]당첨 번호 에러, 로또 번호는 6개의 숫자를 입력해야합니다.');
  }
}
export const validateLottoNumberDecimal = (inputValue) => {
  const decimalNumber = new RegExp('[.]+');
  inputValue.forEach((element) =>{
    if(decimalNumber.test(element)){
      Console.print('[ERROR]');
      throw new Error('[ERROR]당첨 번호 에러, 당첨 번호는 정수의 숫자만 입력해주세요.');
    }
  });
}
export const validateBonusNumberOutOfBounds = (inputValue) => {
  if(inputValue > 45 || inputValue < 1){
    Console.print('[ERROR]');
    throw new Error('[ERROR]보너스 번호 에러, 보너스 번호는 1에서 45사이의 숫자입니다.');
  }
}
export const validateBonusNumberDecimal = (inputValue) => {
  const decimalNumber = new RegExp('[.]+');
  if(decimalNumber.test(inputValue)){
    Console.print('[ERROR]');
    throw new Error('[ERROR]보너스 번호 에러, 보너스 번호는 정수의 숫자만 입력해주세요.');
  }
}
function isInteger(input) {
  if (Number.isNaN(Number(input))) throw Error('[ERROR] 문자임');
  if (input.trim().length === 0) throw Error('[ERROR] 공백임');
  if (input.includes('.')) throw Error('[ERROR] 소수임');
}

export function isValidPayment(input, price = 1000) {
  isInteger(input);
  if (input < price) throw Error('[ERROR] 천 원 미만임');
  if ((input % price) !== 0) throw Error('[ERROR] 천 원 단위가 아님');
}

export function isValidLotto(input) {
  isInteger(input);
  if (input < 1 || input > 45) throw Error('[ERROR] 1에서 45 사이의 숫자가 아님')
}

export function isRepeat(list, input) {
  if (list.indexOf(input) !== list.lastIndexOf(input)) throw Error('[ERROR] 중복됨');
}
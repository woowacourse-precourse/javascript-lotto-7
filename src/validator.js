export function isInteger(input) {
  if (Number.isNaN(Number(input))) throw Error('[ERROR] 문자임');
  if (input.trim().length === 0) throw Error('[ERROR] 공백임');
  if (input.includes('.')) throw Error('[ERROR] 소수임');
}

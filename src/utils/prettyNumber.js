export function prettyNumber(number) {
  return new Intl.NumberFormat('ko-KR').format(number);
}

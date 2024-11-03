export default function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
  if (number < 1 || number > 45) {
    throw new Error("[ERROR] 1~45 사이의 숫자를 입력해 주세요.");
  }
  if (number % 1 !== 0) {
    throw new Error("[ERROR] 정수를 입력해 주세요.");
  }
}

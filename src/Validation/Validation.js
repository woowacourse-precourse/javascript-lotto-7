import { printMessage } from "../View/OutputView";

function validateRounds(input) {
  if (!isNumber.test(input)) {
    printMessage("[ERROR]: 정수가 아닙니다.")
  }

  const rounds = BigInt(input);
  // 유효성 검사
  if (rounds <= 0n) {
  }

  return rounds;
}

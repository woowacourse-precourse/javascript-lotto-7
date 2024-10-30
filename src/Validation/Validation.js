import { printMessage } from '../View/OutputView.js';
import { isNumber } from '../Util/Regex.js';

export function validateMoney(input) {
  if (!isNumber.test(input)) {
    printMessage('[ERROR]: 정수가 아닙니다.');
    return false;
  }

  const rounds = BigInt(input);
  // 유효성 검사
  if (rounds <= 0n) {
    printMessage('[ERROR]: 음수는 입력할수 없습니다.');
    return false;
  }
  if (rounds % 1000n !== 0n) {
    printMessage('[ERROR]: 천원단위로 입력하셔야합니다.');
    return false;
  }

  return rounds;
}

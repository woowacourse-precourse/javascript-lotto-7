import CONDITIONS from "./Conditions.js";

const ERRORS = Object.freeze({
  NOT_1000_WON: `[ERROR] ${CONDITIONS.ONE_LOTTO_PRICE}원단위로 구매해주세요.`,
  NOT_ENOUGH_MONEY: `[ERROR] ${CONDITIONS.ONE_LOTTO_PRICE}원 이상의 돈을 내주세요.`,
  NOT_MONEY_BUT_NUMBER: "[ERROR] 숫자를 입력해주세요.",
  NOT_6_NUMBERS: "[ERROR] 로또 번호는 6개여야 합니다.",
  NO_REPEATED_NUMBER: "[ERROR] 중복되지 않는 1~45 사이의 정수를 입력해주세요.",
  NOT_1_TO_45: "[ERROR] 1~45 사이의 정수를 입력해주세요.",
  NOT_BONUS_NUMBER: "[ERROR] 보너스 번호는 당첨번호와 달라야 합니다.",
});

export default ERRORS;

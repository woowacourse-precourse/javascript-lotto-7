const ERROR_BLANK = "[ERROR] : 공백은 입력될 수 없습니다.";
const ERROR_DUPLICATE = "[ERROR] : 중복된 숫자는 입력할 수 없습니다.";
const ERROR_NOT_A_NUMBER = "[ERROR] : 숫자를 입력해주세요.";
const ERROR_MULTI_OF_1000 = "[ERROR] : 1000단위의 숫자를 입력해주세요.";
const ERROR_NUMBER_RANGE = "[ERROR] : 1이상 45이하의 숫자를 입력해주세요.";
const ERROR_LENGTH_IS_NOT_6 = "[ERROR] : 로또 번호는 6개여야 합니다.";

function throwError(message) {
  throw new Error(message);
}

export {
  ERROR_BLANK,
  ERROR_DUPLICATE,
  ERROR_NOT_A_NUMBER,
  ERROR_MULTI_OF_1000,
  ERROR_NUMBER_RANGE,
  ERROR_LENGTH_IS_NOT_6,
  throwError,
};

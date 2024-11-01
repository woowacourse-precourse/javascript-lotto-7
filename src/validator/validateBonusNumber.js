import _pipe from "../utils/util.js";

const isEmpty = (input) => {
  if (!input) throw new Error("빈 값");
  return input;
};

const isNumber = (input) => {
  if (isNaN(input)) throw new Error("숫자 타입 아님");
  return Number(input);
};

const isNumberInRange = (input) => {
  if (input < 1 || input > 45)
    throw new Error("로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  return input;
};

const validateBonusNumber = _pipe(isEmpty, isNumber, isNumberInRange);

export default validateBonusNumber;

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

const isDuplicate = (input) => {
  if (new Set(input).size !== input.length) throw new Error("중복");
  return input;
};

const validateBonusNumber = (bonusNumberInput, winningNumbers) => {
  const bonusNumber = _pipe(
    isEmpty,
    isNumber,
    isNumberInRange
  )(bonusNumberInput);

  isDuplicate([...winningNumbers, bonusNumber]);

  return bonusNumber;
};
export default validateBonusNumber;

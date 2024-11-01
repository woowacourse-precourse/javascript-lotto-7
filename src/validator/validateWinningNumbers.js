import _pipe from "../utils/util.js";

const isEmpty = (input) => {
  if (!input) throw new Error("빈 값");
  return input;
};

const isSeparatedFormat = (input, separator = ",") => {
  const values = input.split(separator).map((value) => value.trim());
  if (values.length <= 1) throw new Error("입력 형식이 잘못됐습니다.");
  return values;
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

const validateNumbersArray = (input) => {
  return input.map((item) => {
    const number = isNumber(item);
    return isNumberInRange(number);
  });
};

const isLengthSix = (input) => {
  if (input.length < 6) throw new Error("로또 번호는 6개의 숫자여야 합니다.");
  return input;
};

const isDuplicate = (input) => {
  if (new Set(input).size !== input.length) throw new Error("중복");
  return input;
};

const validateWinningNumbers = _pipe(
  isEmpty,
  isSeparatedFormat,
  validateNumbersArray,
  isLengthSix,
  isDuplicate
);

export default validateWinningNumbers;

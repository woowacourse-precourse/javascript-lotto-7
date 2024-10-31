import _pipe from "../utils/util.js";

const isEmpty = (input) => {
  if (!input) throw new Error("빈 값");
  return input;
};

const isNumber = (input) => {
  const amount = Number(input);
  if (isNaN(amount)) throw new Error("숫자 타입 아님");
  return amount;
};

const isMultipleOfThousand = (input) => {
  if (input % 1000 !== 0) throw new Error("1,000원 단위 아님");
  return input;
};

const validateAmount = _pipe(isEmpty, isNumber, isMultipleOfThousand);

export default validateAmount;

import { Console } from '@woowacourse/mission-utils';

const toThrowNewError = (condition, errorMessage) => {
  if (condition) {
    throw new Error(`[ERROR] ${errorMessage}`);
  }
};

const StringHasSpace = (string) => {
  toThrowNewError(string.includes(' '), '공백이 포함되어 있습니다.');
};
const EmptyString = (string) => {
  toThrowNewError(string === '', '빈 문자열 입니다.');
};
const Integer = (string) => {
  const convertedString = Number(string);
  toThrowNewError(
    !Number.isInteger(convertedString),
    '숫자가 아닌 문자가 있습니다.',
  );
};
const Positive = (string) => {
  const convertedString = Number(string);
  toThrowNewError(!(convertedString >= 1000), '1000 이상의 양수만 가능합니다.');
};
const canDivide = (string) => {
  const convertedString = Number(string);
  toThrowNewError(!(convertedString % 1000 === 0), '1000의 배수만 가능합니다.');
};

export const validateLottoBuyPrice = (lottoBuyPrice) => {
  try {
    StringHasSpace(lottoBuyPrice);
    EmptyString(lottoBuyPrice);
    Integer(lottoBuyPrice);
    Positive(lottoBuyPrice);
    canDivide(lottoBuyPrice);
  } catch (error) {
    Console.print(error.message);
  }
};

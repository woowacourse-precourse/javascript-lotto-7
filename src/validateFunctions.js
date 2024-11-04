import { Console } from '@woowacourse/mission-utils';

const toThrowNewError = (condition, errorMessage) => {
  if (condition) {
    throw new Error(`[ERROR] ${errorMessage}\n`);
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

const SEPARATOR = ',';

const NUMBERS_COUNT = 6;
const checkNumbersCount = (string) => {
  const separatorCount = string
    .split('')
    .filter((char) => char === SEPARATOR).length;
  const numbersCount = string.split(SEPARATOR).filter(Boolean).length;

  toThrowNewError(
    numbersCount - 1 !== separatorCount || numbersCount !== NUMBERS_COUNT,
    '올바른 형식으로 입력해주세요. ex) 1,2,3,4,5,6',
  );
};

const AllInteger = (string) => {
  const numbers = string.split(SEPARATOR).map(Number);
  toThrowNewError(
    !numbers.every((number) => Number.isInteger(number)),
    '숫자가 아닌 문자가 있습니다.',
  );
};

const MAX_RANGE = 45;
const MIN_RANGE = 1;
const checkRange = (string) => {
  const numbers = string.split(SEPARATOR).map(Number);
  toThrowNewError(
    !numbers.every((number) => number >= MIN_RANGE && number <= MAX_RANGE),
    '1~45의 수만 가능합니다.',
  );
};

const checkDuplicateNumbers = (string) => {
  const numbers = new Set(string.split(SEPARATOR).map(Number));
  toThrowNewError(numbers.size !== NUMBERS_COUNT, '중복되는 수는 안됩니다.');
};

export const bonusNumberAlreadyExist = (bonusNumber, answerNumbers) => {
  toThrowNewError(
    answerNumbers.includes(bonusNumber),
    '중복되는 보너스 수는 안됩니다.',
  );
};

export const validateLottoBuyPrice = (lottoBuyPrice) => {
  try {
    StringHasSpace(lottoBuyPrice);
    EmptyString(lottoBuyPrice);
    Integer(lottoBuyPrice);
    Positive(lottoBuyPrice);
    canDivide(lottoBuyPrice);
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};

export const validateLottoAnswerNumbers = (lottoAnswerNumbers) => {
  try {
    StringHasSpace(lottoAnswerNumbers);
    EmptyString(lottoAnswerNumbers);
    checkNumbersCount(lottoAnswerNumbers);
    AllInteger(lottoAnswerNumbers);
    checkRange(lottoAnswerNumbers);
    checkDuplicateNumbers(lottoAnswerNumbers);
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};

export const validateLottoBonusNumber = (lottoBonusNumber, rest) => {
  try {
    StringHasSpace(lottoBonusNumber);
    EmptyString(lottoBonusNumber);
    Integer(lottoBonusNumber);
    checkRange(lottoBonusNumber);
    bonusNumberAlreadyExist(lottoBonusNumber, rest);
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};

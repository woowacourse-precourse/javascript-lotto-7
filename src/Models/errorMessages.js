const ERROR = '[ERROR]';
const WINNING_NUMBERS_MESSAGE = '당첨번호 6개를 쉼표로 구분하여 입력해주세요.';

const ERROR_MESSAGE = {
  // purchasePriceError
  EMPTY_INPUT: `${ERROR} 빈값입니다. \n 1,000원 단위로 입력해 주세요.`,
  INCORRECT_UNIT_PRICE: `${ERROR} 금액 단위가 1,000원이 아닙니다. \n 1,000원 단위로 입력해 주세요.`,

  // winningNumbersError
  EMPTY_INPUT_WINNING_NUMBERS: `${ERROR} 빈값입니다. \n ${WINNING_NUMBERS_MESSAGE}`,
  NUMBERS_LENGTH: `${ERROR} 입력하신 당첨번호의 개수가 6개가 아닙닙다. \n ${WINNING_NUMBERS_MESSAGE}`,
  COMMA_COUNT: `${ERROR} 입력하신 모든 당첨번호의 구분이 쉼표(,) 로 되어있지 않습니다. \n ${WINNING_NUMBERS_MESSAGE}`,
};

export { ERROR_MESSAGE };

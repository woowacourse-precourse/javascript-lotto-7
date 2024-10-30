const ERROR = '[ERROR]';

const PURCHASE_PRICE_MESSAGE = '1,000원 단위로 입력해 주세요.';
const WINNING_NUMBERS_MESSAGE = '당첨번호 6개를 쉼표로 구분하여 입력해 주세요.';
const BONUS_NUMBER_MESSAGE = '보너스번호를 1개의 숫자로 입력해 주세요.';

const ERROR_MESSAGE = {
  // purchasePriceError
  EMPTY_INPUT: `${ERROR} 빈값입니다. \n ${PURCHASE_PRICE_MESSAGE}`,
  INCORRECT_UNIT_PRICE: `${ERROR} 금액 단위가 1,000원이 아닙니다. \n ${PURCHASE_PRICE_MESSAGE}`,

  // winningNumbersError
  EMPTY_INPUT_WINNING_NUMBERS: `${ERROR} 빈값입니다. \n ${WINNING_NUMBERS_MESSAGE}`,
  NUMBERS_LENGTH: `${ERROR} 입력하신 당첨번호의 개수가 6개가 아닙닙다. \n ${WINNING_NUMBERS_MESSAGE}`,
  COMMA_COUNT: `${ERROR} 입력하신 모든 당첨번호의 구분이 쉼표(,) 로 되어있지 않습니다. \n ${WINNING_NUMBERS_MESSAGE}`,

  // bonusNumberError
  EMPTY_INPUT_BONUS_NUMBER: `${ERROR} 빈값입니다. \n ${BONUS_NUMBER_MESSAGE}`,
  ONE_DIGIT_NUMBER: `${ERROR} 입력하신 보너스번호는 한 자리의 숫자가 아닙니다. \n ${BONUS_NUMBER_MESSAGE}`,
};

export { ERROR_MESSAGE };

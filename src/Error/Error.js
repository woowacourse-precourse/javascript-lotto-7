const ERROR_PREFIX = '[ERROR]: ';

const ERROR_MESSAGES = Object.freeze({
  money: {
    INVALID_INPUT_MONEY: `${ERROR_PREFIX}돈은 숫자로 입력하셔야 합니다.`,
    ONLY_NOTE_ALLOWED: `${ERROR_PREFIX}천원단위로 입력하셔야합니다.`,
    ONLY_POSITIVE_ALLOWED: `${ERROR_PREFIX}음수는 입력할 수 없습니다.`,
    ZERO_MONEY_NOT_ALLOWED: `${ERROR_PREFIX}0원은 입력할 수 없습니다.`,
  },
  lotteryNumber: {
    NOT_ENOUGH_ELEMENT: `${ERROR_PREFIX}숫자가 충분히 입력되지 않았거나, 추가로 더 입력되었습니다.`,
    ONLY_NUMBER_ALLOWED: `${ERROR_PREFIX}입력된 값이 양수 정수가 아닙니다.`,
    ONLY_NUMBER_IN_RANGE_ALLOWED: `${ERROR_PREFIX}입력된 숫자가 1-45 밖에 있습니다.`,
    DUPLICATED_NUMBER: `${ERROR_PREFIX}입력된 수 중 중복이 존재합니다.`,
  },
  note: {
    INVALID_LOTTERY_NOTE_COUNT: `${ERROR_PREFIX}유효하지 않은 로또 구입 개수입니다. 1개 이상의 1,000원 단위로 입력해 주세요.`,
  },
  lotteries: {
    INVALID_LOTTERY_ARRAY: `${ERROR_PREFIX}로또 포맷이 올바르지 않습니다.`,
  },
});

export default ERROR_MESSAGES;

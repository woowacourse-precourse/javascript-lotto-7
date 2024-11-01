const ERROR_MESSAGES = Object.freeze({
  money: {
    INVALID_INPUT_MONEY: '[ERROR]: 돈은 숫자로 입력하셔야 합니다.',
    ONLY_NOTE_ALLOWED: '[ERROR]: 천원단위로 입력하셔야합니다.',
    ONLY_POSITIVE_ALLOWED: '[ERROR]: 음수는 입력할수 없습니다.',
    ZERO_MONEY_NOT_ALLOWED: '[ERROR]: 0원은 입력할수 없습니다.',
  },
  lotteryNumber: {
    NOT_ENOUGH_ELEMENT: '[ERROR]: 숫자가 충분히 입력되지 않았습니다.',
    ONLY_NUMBER_ALLOWED: '[ERROR]: 입력된 값이 숫자가 아닙니다.',
    ONLY_NUMBER_IN_RANGE_ALLOWED: '[ERROR]: 입력된 숫자가 1-45 밖에 있습니다.',
    DUPLICATED_NUMBER: '[ERROR]: 입력된 수중 중복이 존재합니다.',
  },

  note: {
    INVALID_LOTTERY_NOTE_COUNT:
      '[ERROR]: 유효하지 않은 로또 구입 개수입니다. 1개 이상의 1,000원 단위로 입력해 주세요.',
  },
});
export { ERROR_MESSAGES };

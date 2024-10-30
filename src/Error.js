const ERROR_MESSAGES = Object.freeze({
  money: {
    INVALID_INPUT_MONEY: '[ERROR]: 돈은 숫자로 입력하셔야 합니다.',
    ONLY_NOTE_ALLOWED: '[ERROR]: 천원단위로 입력하셔야합니다.',
    ONLY_POSITIVE_ALLOWED: '[ERROR]: 음수는 입력할수 없습니다.',
  },
  names: {
    INVALID_NAME: '이름이 올바르지 않습니다',
    NAME_TOO_LONG: '자동차 이름은 5자를 초과할 수 없습니다.',
    DUPLICATED_NAMES: '중복된 이름은 사용할수 없습니다.',
    EMPTY_NAME: '공백을 이름으로 사용할수 없습니다',
    CONSECUTIVE_DELIMITERS: '구분자를 중복되서 사용할수 없습니다.',
    WRONG_FORMAT: '포멧팅이 올바르지 않습니다.',
  },
  cars: {
    ILLEGAL_CAR: '생성된 차량 객체가 정의되지 않았습니다.',
    ILLEGAL_CAR_ARRAY: '차량 배열이 올바르지 않습니다.',
  },
});
export { ERROR_MESSAGES };

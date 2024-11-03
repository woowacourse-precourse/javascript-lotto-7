const ERROR_MESSAGES = Object.freeze({
  INVALID_MONEY_INPUT: "입력할 수 없는 금액입니다.",

  INDIVISIBLE_MONEY_INPUT: "구입 금액은 1000원으로 나누어져야 합니다.",

  LIMIT_MONEY_INPUT: "최대 구입 금액을 초과하였습니다.",

  INVALID_NUMBER_INPUT: "유효하지 않은 번호입니다.",

  OUT_OF_RANGE_NUMBER_INPUT: "로또 번호는 1~45 사이의 값이어야 합니다.",

  DUPLICATE_NUMBER_INPUT: "중복된 번호가 존재합니다.",

  INVALID_BONUS_NUMBER_INPUT: "보너스 번호가 입력하신 로또 번호와 중복됩니다.",
});

export default ERROR_MESSAGES;

export const ERROR_MESSAGE_MONEY_INPUT = {
  nan: "[ERROR]: 구매 금액으로 숫자가 아닌 값이 들어왔습니다.",
  nonPositive: "[ERROR]: 구매 금액 값은 양수여야 합니다.",
  nonInteger: "[ERROR]: 구매 금액 값은 양의 정수여야 합니다.",
};

export const ERROR_MESSAGE_JACKPOT_INPUT = {
  nan: "[ERROR]: 당첨 번호에 숫자가 아닌 것이 있습니다.",
  outOfBound: "[ERROR]: 보너스 숫자가 유효 범위(1~45)를 벗어납니다.",
  nonInteger: "[ERROR]: 당첨 번호에 양의 정수가 아닌 것이 섞여 있습니다!",
  empty: "[ERROR]: 빈 값이 당첨 번호로 입력되었습니다.",
  invalidLength: "[ERROR]: 당첨 번호는 6개여야 합니다.",
  duplicated: "[ERROR]: 중복된 숫자가 발견되었습니다.",
};

export const ERROR_MESSAGE_BONUS_INPUT = {
  nan: "[ERROR]: 보너스 값이 숫자가 아닙니다.",
  nonPositive: "[ERROR]: 보너스 숫자는 양수여야 합니다.",
  nonInteger: "[ERROR]: 보너스 숫자는 양의 정수여야 합니다.",
  outOfBound: "[ERROR]: 보너스 숫자가 유효 범위(1~45)를 벗어납니다.",
};

export const ERROR_MESSAGE_VALIDATE_LOTTO = {
  invalidLength: "[ERROR]: 로또 번호는 6개여야 합니다.",
  duplicated: "[ERROR]: 중복된 숫자가 발견되었습니다.",
  nan: "[ERROR]: 로또 번호에 숫자가 아닌 것이 있습니다.",
  nonInteger: "[ERROR]: 로또 번호에 정수가 아닌 것이 있습니다.",
  outOfBound: "[ERROR]: 로또 번호가 유효 범위(1~45)를 벗어납니다.",
};

export const ERROR_MESSAGE_FORMAT_OUTPUT = {
  nonArray: "[ERROR]: 인수로 배열이 아닌 것이 주어졌습니다.",
};

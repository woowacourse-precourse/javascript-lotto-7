export const ERROR_CODE = {
    NOT_POSITIVE_NUMBER: "[ERROR] 1이상의 숫자를 입력해주세요.",
    OUT_OF_RANGE: (min, max) => `[ERROR] ${min}과 ${max}사이의 값을 입력해주세요.`,
    NOT_DIVIDED_BY_VALUE: (value) => `[ERROR] ${value}단위의 금액을 입력해주세요.`,
    SIZE_OUT_OF_RANGE: (size) => `[ERROR] 번호는 ${size}개여야 합니다.`,
    NUMBER_DUPLICATE: `[ERROR] 번호에 중복이 있습니다.`,
    BONUS_NUMBER_DUPLICATE: '[ERROR] 보너스 번호가 당첨번호와 중복됩니다.'
};

export const PURCHASE_PRICE = {
    MIN_CURR_UNIT: 1000,
}

export const LOTTO = {
    SIZE: 6,
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
}

export const WINNING_NUMBER = {
    SIZE: 6,
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
}

export const INSTRUCTION = {
    GET_PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
    PRINT_LOTTO_AMOUNT: (lottoAmount) => `\n${lottoAmount}개를 구매했습니다.`,
    GET_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    GET_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n"
}
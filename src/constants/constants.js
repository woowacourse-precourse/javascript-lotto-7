export const ERROR_CODE = {
    NOT_POSITIVE_NUMBER: "[ERROR] 1이상의 숫자를 입력해주세요.",
    OUT_OF_RANGE: (min, max) => `[ERROR] ${min}과 ${max}사이의 값을 입력해주세요.`,
    NOT_DIVIDED_BY_VALUE: (value) => `[ERROR] ${value}단위의 금액을 입력해주세요.`
};

export const PURCHASE_PRICE = {
    MIN_CURR_UNIT: 1000,
}

export const INSTRUCTION = {
    GET_PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
    PRINT_LOTTO_AMOUNT: (lottoAmount) => `${lottoAmount}개를 구매했습니다.\n`,
}
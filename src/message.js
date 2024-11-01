export const COMMON_MESSAGE = {
    INPUT_PURCHASE: Object.freeze("구입금액을 입력해 주세요."),
    INPUT_WINNING_NUM: Object.freeze("당첨 번호를 입력해 주세요."),
    INPUT_BONUS_NUM: Object.freeze("보너스 번호를 입력해 주세요."),
    WINNING_STATS: Object.freeze("당첨 통계\n---"),
}

const DEFAULT_ERROR_MESSAGE = "[ERROR]";
export const ERROR_MESSAGE = {
    PURCHASE_AMOUNT_NOT_DIVISIBLE_THOUSAND: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 구입 금액이 1,000원 단위가 아닙니다. 다시 입력해주세요.`
    ),
    NOT_NUMBER: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 입력한 값이 숫자가 아닙니다.`
    ),
    NOT_POSITIVE: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 입력한 값이 양수가 아닙니다.`
    ),
}
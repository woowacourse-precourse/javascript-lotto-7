export const COMMON_MESSAGE = {
    INPUT_PURCHASE: Object.freeze("구입금액을 입력해 주세요.\n"),
    INPUT_WINNING_NUM: Object.freeze("\n당첨 번호를 입력해 주세요.\n"),
    INPUT_BONUS_NUM: Object.freeze("\n보너스 번호를 입력해 주세요.\n"),
    WINNING_STATS: Object.freeze("\n당첨 통계\n---"),
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
    NOT_RANGE: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 번호는 1 이상 45 이하 사이의 숫자여야 합니다.`
    ),
    NOT_SIX_ELEMENTS: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 로또 번호는 6개여야 합니다.`
    ),
    DUPLICATION: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 로또 번호에 중복된 숫자가 있습니다.`
    ),
    BONUS_IN_WINNING_NUM: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`
    )
}
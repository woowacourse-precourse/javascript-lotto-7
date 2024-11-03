export const MESSAGE = Object.freeze({
    PURCHASE_AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER_INPUT: '보너스 번호를 입력해 주세요.\n',
    WINNING_STATISTICS: '당첨 통계\n',
    LINE: '---\n',
})

export const ERROR_MESSAGE = Object.freeze({
    PURCHASE_AMOUNT_ERROR : '[ERROR] 구매 금액은 1000원 단위로 입력해주세요.',
    WINNING_NUMBER_LACK_ERROR : '[ERROR] 당첨 번호가 6개 미만입니다.',
    WINNING_NUMBER_EXEED_ERROR: '[ERROR] 당첨 번호가 6개를 초과했습니다.',
    BONUS_NUMBER_LACK_ERROR: '[ERROR] 보너스 번호가 입력되지 않았습니다.',
    BONUS_NUMBER_EXEED_ERROR: '[ERROR] 보너스 번호가 2개 이상 입력되었습니다.',
})

export const CONSTANTS = Object.freeze({
    LOTTO_PRICE: 1000,
    LOTTO_NUMBER: 6,
})
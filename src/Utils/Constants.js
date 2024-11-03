export const MESSAGE = Object.freeze({
    PURCHASE_AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER_INPUT: '보너스 번호를 입력해 주세요.\n',
    WINNING_STATISTICS: '당첨 통계',
    LINE: '---',
})

export const ERROR_MESSAGE = Object.freeze({
    PURCHASE_AMOUNT_ERROR: '[ERROR] 구매 금액은 1000원 단위로 입력해주세요.',
    WINNING_NUMBER_LACK_ERROR: '[ERROR] 당첨 번호가 6개 미만입니다.',
    WINNING_NUMBER_EXEED_ERROR: '[ERROR] 당첨 번호가 6개를 초과했습니다.',
    WINNING_NUMBER_NOT_NUMBER_ERROR: '[ERROR] 당첨 번호는 숫자만 입력 가능합니다.',
    BONUS_NUMBER_LACK_ERROR: '[ERROR] 보너스 번호가 입력되지 않았습니다.',
    BONUS_NUMBER_EXEED_ERROR: '[ERROR] 보너스 번호가 2개 이상 입력되었습니다.',
    BONUS_NUMBER_NOT_NUMBER_ERROR: '[ERROR] 보너스 번호는 숫자만 입력 가능합니다.',
    WINNING_NUMBER_DUPLICATION_ERROR: '[ERROR] 중복된 당첨 번호를 입력할 수 없습니다.',
    WINNING_NUMBER_RANGE_ERROR: '[ERROR] 당첨 번호는 1~45 사이의 값만 입력 가능합니다.',
    BONUS_NUMBER_DUPLICATION_ERROR: '[ERROR] 당첨 번호와 중복되는 보너스 번호를 입력할 수 없습니다.',
    BONUS_NUMBER_RANGE_ERROR: '[ERROR] 보너스 번호는 1~45 사이의 값만 입력 가능합니다.',
})

export const CONSTANTS = Object.freeze({
    LOTTO_PRICE: 1000,
    NUMBER_OF_LOTTO_NUMBER: 6,
    NUMBER_OF_BONUS_NUMBER: 1,
    RANKING: {
        1: { match: 6, bonus: false, prize: 2000000000, prizeString : "2,000,000,000" },
        2: { match: 5, bonus: true, prize: 30000000, prizeString : "30,000,000" },
        3: { match: 5, bonus: false, prize: 1500000, prizeString : "1,500,000" },
        4: { match: 4, bonus: false, prize: 50000, prizeString : "50,000" },
        5: { match: 3, bonus: false, prize: 5000, prizeString : "5,000" },
    },
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
})
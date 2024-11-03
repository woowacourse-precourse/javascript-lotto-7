export const LOTTO = {
    NUMBER_COUNT: 6,
    MIN: 1,
    MAX: 45,
    PRICE_PER_TICKET: 1000,
};

export const PRIZE_INFO = {
    match_3: { label: '3개 일치', prize: 5_000 },
    match_4: { label: '4개 일치', prize: 50_000 },
    match_5: { label: '5개 일치', prize: 1_500_000 },
    match_6_bonus: { label: '5개 일치, 보너스 볼 일치', prize: 30_000_000 },
    match_6_full: { label: '6개 일치', prize: 2_000_000_000 },
};

export const DELIMITERS = {
    LOTTO_NUMBERS: ', ',
    WINNING_NUMBERS_INPUT: ',',
};

export const MESSAGES = {
    INFO: {
        PURCHASE_AMOUNT_PROMPT: '구입금액을 입력해 주세요.\n',
        WINNING_NUMBERS_PROMPT: '\n당첨 번호를 입력해 주세요.\n',
        BONUS_NUMBER_PROMPT: '\n보너스 번호를 입력해 주세요.\n',
        PURCHASED_LOTTO_COUNT: '개를 구매했습니다.',
        WINNING_STATISTICS_HEADER: '\n당첨 통계\n---\n',
        YIELD_RATE: '총 수익률은 ',
    },
    ERROR: {
        BONUS_NUMBER_NOT_NUMBER: '[ERROR] 숫자를 입력해주세요.',
        BONUS_NUMBER_FLOATING_POINT_NUMBER: '[ERROR] 보너스 번호는 실수가 될 수 없습니다.',
        BONUS_NUMBER_OUT_OF_RANGE: '[ERROR] 보너스 번호는 1과 45 사이여야 합니다.',
        BONUS_NUMBER_DUPLICATE_WITH_WINNING_NUMBER: '[ERROR] 이미 당첨 번호에 있는 숫자예요! 중복되지 않는 다른 숫자를 입력해주세요.',
        WINNING_NUMBERS_NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
        WINNING_NUMBERS_DUPLICATION: '[ERROR] 중복되는 숫자가 있습니다.',
        WINNING_NUMBERS_NOT_NUMBER: '[ERROR] 숫자가 아닌 값이 있습니다.',
        WINNING_NUMBERS_INCLUDE_FLOATING_POINT_NUMBER: '[ERROR] 실수가 포함되어 있습니다.',
        WINNING_NUMBERS_OUT_OF_RANGE: '[ERROR] 모든 숫자는 1과 45 사이여야 합니다.',
        PURCHASE_AMOUNT_NOT_NUMBER: '[ERROR] 구입금액은 숫자여야 합니다.',
        PURCHASE_AMOUNT_NEGATIVE_NUMBER: '[ERROR] 구입금액은 음수가 될 수 없습니다.',
        PURCHASE_AMOUNT_FLOATING_POINT_NUMBER: '[ERROR] 구입금액은 실수가 될 수 없습니다.',
        PURCHASE_AMOUNT_ZERO_OR_WHITESPACE: '[ERROR] 돈을 내지 않으셨어요! 최소 한 장(1000원)부터 구입 가능합니다.',
        PURCHASE_AMOUNT_BELOW_MINIMUM: '[ERROR] 돈이 부족해요! 최소 한 장(1000원)부터 구입 가능합니다.',
        PURCHASE_AMOUNT_TOO_LARGE: '[ERROR] 한 번에 최대 100개까지만 구입 가능합니다.',
        PURCHASE_AMOUNT_NOT_DIVISIBLE_BY_1000: '[ERROR] 거스름돈이 발생했어요! 구입금액은 1000으로 나누어 떨어져야 합니다.',
    }
};

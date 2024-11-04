export const INPUT_MESSAGE = Object.freeze({
    AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
    WINNING_LOTTO_INPUT: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_INPUT: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
    COUNT: '개를 구매했습니다.\n',
    RESULT: '\n당첨 통계\n---',
    MATCH_3: '3개 일치 (5,000원) - ',
    MATCH_4: '4개 일치 (50,000원) - ',
    MATCH_5: '5개 일치 (1,500,000원) - ',
    MATCH_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    MATCH_6: '6개 일치 (2,000,000,000원) - ',
    REVENUE_PER: '총 수익률은 ',
});

export const AMOUNT_ERROR = Object.freeze({
    ERROR_1000: '[ERROR] 입력하신 금액이 1000원 단위여야 합니다.',
    ERROR_NUMBER: '[ERROR] 숫자를 입력하셔야 합니다.'
});

export const BONUS_ERROR = Object.freeze({
    ERROR_UNIQUE: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
    ERROR_RANGE: '[ERROR] 입력하신 보너스 번호는 1부터 45안에 숫자가 아닙니다.',
    ERROR_NO_INPUT: '[ERROR] 입력한 보너스 번호가 없습니다.'
});

export const WINNING_LOTTO_ERROR = Object.freeze({
    ERROR_COMMA: '[ERROR] 입력하신 로또번호는 ,로 구분해야 합니다.',
    ERROR_COUNT_6: '[ERROR] 입력하신 로또번호는 6개여야 합니다.',
    ERROR_NO_INPUT: '[ERROR] 입력하신 로또번호가 없습니다.',
    ERROR_UNIQUE: '[ERROR] 입력하신 로또번호가 중복되었습니다.',
    ERROR_RANGE: '[ERROR] 입력하신 로또번호가 1부터 45안에 숫자가 아닙니다.',
});
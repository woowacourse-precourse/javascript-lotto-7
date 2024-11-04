export const lottoMesaage = {
    INPUT_MONEY: '구입금액을 입력해 주세요.\n',
    PRINT_BUYCOUNT: '개를 구매했습니다.',
    INPUT_LOTTONUMBERS: '\n당첨 번호를 입력해 주세요.\n',
    INPUT_BONUSNUMBER: '\n보너스 번호를 입력해 주세요\n',
    PRINT_COUNT: '개',
};

export const statisticsMesssage = {
    PRINT_STATISTICS: '\n당첨 통계',
    PRINT_BAR: '-',
    PRINT_MATCH: `${lottoMesaage.PRINT_COUNT} 일치`,
    PRINT_BONUS: '보너스 볼 일치',
    PRINT_EARNRATE: '총 수익률은',
    PRINT_RATEUNIT: '%입니다.',
    OPENING_PARENTHESIS: '(',
    CLOSING_PARENTHESIS: ')',
    MONEY_UNIT: '원',
};

export const number = {
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    FIVE_BONUS: '5+bonus',
    SIX: 6,
    THREE_VALUE: '5,000',
    FOUR_VALUE: '50,000',
    FIVE_VALUE: '1,500,000',
    FIVE_BONUS_VALUE: '30,000,000',
    SIX_VALUE: '2,000,000,000',
    HUNDRED: 100,
    LOTTO_UNITS: 1000,
    DEFAULT_COUNT: 0,
    ZERO: 0,
    ROUND_NUMBER: 1,
    LIMIT_BOUNS_COUNT: 1,
    LIMIT_LOTTO_COUNT: 6,
    FIRST_LOTTO_NUM: 1,
    LAST_LOTTO_NUM: 45,
};

export const winningLottoCountPrice = [
    {count: number.THREE, price: number.THREE_VALUE},
    {count: number.FOUR, price: number.FOUR_VALUE},
    {count: number.FIVE, price: number.FIVE_VALUE},
    {count: number.FIVE_BONUS, price: number.FIVE_BONUS_VALUE},
    {count: number.SIX, price: number.SIX_VALUE},
]

export const errorMessage = {
    MONEY_NOT_DIVISIBLE: `[ERROR] ${number.LOTTO_UNITS}로 나누어지는 숫자를 입력해주세요.`,
    IS_NOT_NUMBER: '[ERROR] 숫자를 입력해주세요.',
    IS_OVER_BONUS_NUMBER_COUNT: '[ERROR] 올바른 숫자 갯수를 입력해주세요.',
    IS_DUPLICATE_BONUS_NUMBER: '[ERROR] 당첨 번호에 없는 보너스 숫자를 입력해주세요.',
    IS_DUPLICATE_LOTTO_NUMBER: '[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.',
    IS_EMPTY: '[ERROR] 값을 입력해주세요.',
    IS_ZEOR: '[ERROR] 0이 아닌 값을 입력해주세요.',
    IS_OUT_OF_RANGE: `[ERROR] 로또 번호는 ${number.FIRST_LOTTO_NUM}부터 ${number.LAST_LOTTO_NUM} 사이의 숫자여야 합니다.`,
    IS_OUT_OF_RANGE_LOTTO_COUNT: `[ERROR] 로또 번호는 ${number.LIMIT_LOTTO_COUNT}개여야 합니다.`,
}
const MESSAGES = Object.freeze({
    BUY_MONEY_INPUT: '구입금액을 입력해 주세요\n',

})

const ERROR = Object.freeze({
    BUY_MONEY_NOT_NUMBER: '구입금액은 숫자만 입력해주세요.',
    BUY_MONEY_INVALID: '구입 금액은 유효한 숫자여야 합니다.',
    BUY_MONEY_MINUS: '구입금액은 양수만 입력해주세요.',
    BUY_MONEY_END_WITH_1000: '구입금액은 1000원 단위입니다.'
})

export { MESSAGES, ERROR };
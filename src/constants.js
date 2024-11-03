const ERROR_PREFIX="[ERROR]"

const INPUT_MESSAGE={
    PURCHASE_AMOUNT_MESSAGE:'구입금액을 입력해 주세요.\n',
}

const ERROR_MESSAGE={
    IS_NOT_NUMBER:`${ERROR_PREFIX} 숫자를 입력해 주세요.`,
    INVALID_BLANK:`${ERROR_PREFIX} 공백은 허용되지 않습니다.`,
    IS_NOT_POSITIVE_NUMBER:`${ERROR_PREFIX} 양수만 입력해주세요.`,
    IS_NOT_MULTIPLE_OF_THOUSAND:`${ERROR_PREFIX} 1000으로 나누어떨어지는 수만 입력 가능합니다.`
}

export {INPUT_MESSAGE, ERROR_MESSAGE}
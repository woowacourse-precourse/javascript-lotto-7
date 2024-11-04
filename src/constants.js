const ERROR_PREFIX="[ERROR]";
const LOTTO_COST=1000;
const MIN_LOTTO_NUMBER=1;
const MAX_LOTTO_NUMBER=45;
const LOTTO_COUNT=6;

const PURCHASE_MESSAGE={
    INPUT_PURCHASE_COST:'구입금액을 입력해 주세요.\n',
    PURCHASE_AMOUNT:'개를 구입했습니다.'
}

const PURCHASE_ERROR_MESSAGE={
    IS_NOT_NUMBER:`${ERROR_PREFIX} 숫자를 입력해 주세요.`,
    INVALID_BLANK:`${ERROR_PREFIX} 공백은 허용되지 않습니다.`,
    IS_NOT_POSITIVE_NUMBER:`${ERROR_PREFIX} 양수만 입력해주세요.`,
    IS_NOT_MULTIPLE_OF_THOUSAND:`${ERROR_PREFIX} ${LOTTO_COST}으로 나누어떨어지는 수만 입력 가능합니다.`
}

const LOTTO_MESSAGE={
    INPUT_LOTTO_NUMBERS:'\n당첨 번호를 입력해 주세요.\n',
}

const LOTTO_ERROR_MESSAGE={
    INVALID_COUNT:`${ERROR_PREFIX} 로또 번호는 ${LOTTO_COUNT}개여야 합니다.`,
    DUPLICATE_NUMBER: `${ERROR_PREFIX} 중복된 번호가 있습니다.`,
    OUT_OF_RANGE: `${ERROR_PREFIX} 로또 번호는 ${MIN_LOTTO_NUMBER}과 ${MAX_LOTTO_NUMBER} 사이의 숫자여야 합니다.`,
    IS_NOT_NUMBER: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
    IS_NOT_INTEGER: `${ERROR_PREFIX} 로또 번호는 ${MIN_LOTTO_NUMBER}과 ${MAX_LOTTO_NUMBER} 사이의 정수여야 합니다.`,
}

const BONUS_MESSAGE={
    INPUT_BONUS_NUMBER:'\n보너스 번호를 입력해 주세요.\n',
}

const BONUS_ERROR_MESSAGE={
    OUT_OF_RANGE: `${ERROR_PREFIX} 보너스 번호는 ${MIN_LOTTO_NUMBER}과 ${MAX_LOTTO_NUMBER} 사이의 숫자여야 합니다.`,
    IS_NOT_NUMBER: `${ERROR_PREFIX} 보너스 번호는 숫자만 입력 가능합니다.`,
    IS_EMPTY: `${ERROR_PREFIX} 보너스 번호는 빈 값일 수 없습니다.`,
    IS_NOT_INTEGER: `${ERROR_PREFIX} 보너스 번호는 ${MIN_LOTTO_NUMBER}과 ${MAX_LOTTO_NUMBER} 사이의 정수여야 합니다.`,
}

export {PURCHASE_MESSAGE, 
    PURCHASE_ERROR_MESSAGE, 
    LOTTO_MESSAGE, 
    LOTTO_ERROR_MESSAGE,
    LOTTO_COST,
    MIN_LOTTO_NUMBER,
    MAX_LOTTO_NUMBER,
    LOTTO_COUNT,
    BONUS_MESSAGE,
    BONUS_ERROR_MESSAGE
}
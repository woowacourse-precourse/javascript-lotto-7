export const INPUT = {
    PURCHASE: "구입금액을 입력해 주세요.\n",
    WINNING_STATS: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUM: "보너스 번호를 입력해 주세요.\n"
}
export const OUTPUT = {
    PURCHASE: "개를 구매했습니다.",
    TOTAL_RETURN: "총 수익률은",
}

export const ERROR_CODE = {
    PURCHASE: {
        NOT_NUMBER: "[ERROR] 구입 금액은 문자 또는 빈 값을 포함 할 수 없습니다.",
        EMPTY: "[ERROR] 구입 금액은 빈 값이 올 수 없습니다.",
        HAS_SPACE: "[ERROR] 구입 금액은 공백을 포함할 수 없습니다.",
        NOT_DIVISION: "[ERROR] 구입 금액은 1000단위의 숫자만 가능합니다.",
        NOT_POSITIVE_NUMBER: "[ERROR] 구입 금액에 0이하의 숫자를 입력 할 수 없습니다.",
        MAX_INTEGER: "[ERROR] 구입 금액은 숫자 자료형 크기를 초과 할 수 없습니다.",
    },
    LOTTO: {
        NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
        INVALID: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
        DECIMAL: "[ERROR] 로또 번호는 소수를 포함할 수 없습니다.",
        OVERLAP: "[ERROR] 로또 번호는 중복된 값을 포함할 수 없습니다.",
        HAS_SPACE: "[ERROR] 로또 번호는 공백을 포함할 수 없습니다.",
        NAN: "[ERROR] 로또 번호는 문자 또는 빈 값을 포함 할 수 없습니다."
    },
    BONUS_NUM: {
        OVERLAP: "[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.",
        NAN: "[ERROR] 보너스 번호는 문자 또는 빈 값을 포함 할 수 없습니다.",
        HAS_SPACE: "[ERROR] 보너스 번호는 공백을 포함할 수 없습니다.",
        DECIMAL: "[ERROR] 보너스 번호는 소수가 올 수 없습니다.",
        INVALID: "[ERROR] 보너스 번호는 부터 45 사이의 숫자여야 합니다.",
        MAX_INTEGER: "[ERROR] 보너스 번호는 숫자 자료형 크기를 초과 할 수 없습니다.",
    }
}
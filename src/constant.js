const BUYING_COST_REG_EXP = /(?<=^\s*)([1-9]+\d*)(?=0{3}\s*원?(?!원)\s*$)/;

const PLEASE_INPUT_UNIQUE_NUMBER =
    "[ERROR] 로또 번호는 중복되지 않아야 합니다.";

const PLEASE_INPUT_RIGHT_NUMBER =
    "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.";

const PLEASE_INPUT_RIGHT_COST =
    "[ERROR] 구입금액을 올바른 단위로 입력해주세요.";

export {
    PLEASE_INPUT_UNIQUE_NUMBER,
    PLEASE_INPUT_RIGHT_NUMBER,
    BUYING_COST_REG_EXP,
    PLEASE_INPUT_RIGHT_COST,
};

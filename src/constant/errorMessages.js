import {
	LOTTO_LENGTH,
	LOTTO_MAX_MONEY,
	LOTTO_MAX_NUMBER,
	LOTTO_MIN_NUMBER,
	LOTTO_MONEY,
} from "./lotto.js";

export const ERROR_MESSAGE = {
	WRONG_UNIT: `[ERROR] 구입금액을 ${LOTTO_MONEY}원 단위로 입력되지 않았습니다.`,
	WRONG_CHARACTER: `[ERROR] 잘못된 문자가 입력되었습니다.`,
	PASSED_BUY_LIMIT: `[ERROR] 구입한도 ${LOTTO_MAX_MONEY}원을 초과하였습니다.`,
	WRONG_WINNING_DIGIT: `[ERROR] 당첨 번호는 6자리 숫자입니다.`,
	PASSED_WINNING_RANGE: `[ERROR] 당첨 번호의 범위는 ${LOTTO_MIN_NUMBER}에서 ${LOTTO_MAX_NUMBER}까지 입니다.`,
	PASSED_BONUS_RANGE: `[ERROR] 보너스 번호의 범위는 ${LOTTO_MIN_NUMBER}에서 ${LOTTO_MAX_NUMBER}까지 입니다.`,
	DUPLICATE_WINNING_NUMBER: `[ERROR] 당첨 번호에 중복된 번호가 있습니다.`,
	DUPLICATE_LOTTO_NUMBER: `[ERROR] 로또 번호에 중복된 번호가 있습니다.`,
	WRONG_LOTTO_NUMBER: `[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`,
};

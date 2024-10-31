export const LOTTO_MONEY = 1000;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_LENGTH = 6;
export const PROMPT = {
	LOTTO_BUY: "구입금액을 입력해 주세요.\n",
	LOTTO_COUNT: (count) => `${count}개를 구매했습니다.\n`,
	LOTTO_NUMBERS: (lottoNumbers) => `[${lottoNumbers.join(", ")}]`,
	LOTTO_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
	LOTTO_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

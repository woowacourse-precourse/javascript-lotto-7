export const PROMPT = {
	LOTTO_BUY: "구입금액을 입력해 주세요.\n",
	LOTTO_COUNT: (count) => `\n${count}개를 구매했습니다.`,
	LOTTO_NUMBERS: (lottoNumbers) => `[${lottoNumbers.join(", ")}]`,
	LOTTO_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
	LOTTO_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
	LOTTO_WINNING_COUNT: (winningMap) =>
		`\n당첨 통계\n---\n3개 일치 (5,000원) - ${winningMap["5rank"]}개\n4개 일치 (50,000원) - ${winningMap["4rank"]}개\n5개 일치 (1,500,000원) - ${winningMap["3rank"]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningMap["2rank"]}개\n6개 일치 (2,000,000,000원) - ${winningMap["1rank"]}개`,
	LOTTO_WINNING_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

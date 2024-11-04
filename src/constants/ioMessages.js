const IO_MESSAGES = {
  PURCHASE_AMOUNT: '구입금액을 입력해주세요.\n',
  PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  LOTTO_NUMBERS: (numbers) => `[${numbers.join(', ')}]`,
  WINNING_NUMBERS: '\n당첨 번호를 입력해주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해주세요.\n',
  STATISTICS_HEADER: '\n당첨 통계\n---',
  MATCH_3: (count) => `3개 일치 (5,000원) - ${count}개`,
  MATCH_4: (count) => `4개 일치 (50,000원) - ${count}개`,
  MATCH_5: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  MATCH_5_BONUS: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  MATCH_6: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export default IO_MESSAGES;

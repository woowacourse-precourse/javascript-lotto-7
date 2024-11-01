export const INPUT_MESSAGES = {
  purchase_amount: '구입 금액을 입력해주세요.\n',
  winning_numbers: '\n당첨 번호를 입력해 주세요.\n',
  bonus_number: '\n보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGES = {
  purchased_lottos: (count) => `\n${count}개를 구매했습니다.`,
  lotto_numbers: (numbers) => `[${numbers.join(', ')}]`,
  result_header: '\n당첨 통계\n---',
  prize_counts: [
    { key: 3, message: '3개 일치 (5,000원)' },
    { key: 4, message: '4개 일치 (50,000원)' },
    { key: 5, message: '5개 일치 (1,500,000원)' },
    { key: '5Bonus', message: '5개 일치, 보너스 볼 일치 (30,000,000원)' },
    { key: 6, message: '6개 일치 (2,000,000,000원)' },
  ],
  roi: (roi) => `총 수익률은 ${roi}%입니다.`,
};

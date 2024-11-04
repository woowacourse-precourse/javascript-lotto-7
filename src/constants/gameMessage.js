const GAME_MESSAGE = Object.freeze({
  PURCHASE: '구입금액을 입력해 주세요.\n',
  BOUGHT: `개를 구매했습니다.`,
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '당첨 통계',
  DIVIDING_LINE: '---',
});

const getMessagesByStatistics = (awards, count) => {
  switch (awards) {
    case 3:
      return `3개 일치 (5,000원) - ${count}개`;

    case 4:
      return `4개 일치 (50,000원) - ${count}개`;

    case 5:
      return `5개 일치 (1,500,000원) - ${count}개`;

    case 'BONUS':
      return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;

    case 6:
      return `6개 일치 (2,000,000,000원) - ${count}개`;

    default:
      return '';
  }
};

export { GAME_MESSAGE, getMessagesByStatistics };

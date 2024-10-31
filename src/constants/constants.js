export const MATCH_CODE = Object.freeze({
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_WITH_BONUS: 5.5,
  SIX: 6,
});

export const MATCH_WINNING_DETAILS = Object.freeze({
  [MATCH_CODE.THREE]: (winningCount) => `3개 일치 (5,000원) - ${winningCount}개`,
  [MATCH_CODE.FOUR]: (winningCount) => `4개 일치 (50,000원) - ${winningCount}개`,
  [MATCH_CODE.FIVE]: (winningCount) => `5개 일치 (1,500,000원) - ${winningCount}개`,
  [MATCH_CODE.FIVE_WITH_BONUS]: (winningCount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount}개`,
  [MATCH_CODE.SIX]: (winningCount) => `6개 일치 (2,000,000,000원) - ${winningCount}개`,
});
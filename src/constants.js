export const ONE_LOTTO_PRICE = 1000;

export const LottoWinningPrice = Object.freeze({
  3: 5_000,
  4: 50_000,
  5: 1_500_000,
  5.5: 30_000_000,
  6: 2_000_000_000,
});

export const LottoWinningPriceChar = Object.freeze({
  3: '5,000',
  4: '50,000',
  5: '1,500,000',
  5.5: '30,000,000',
  6: '2,000,000,000',
});

export const PROMPT_MESSAGES = Object.freeze({
  buyPrice: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
  lottoResultTitle: '당첨 통계',
  lottoResultDivider: '---',
  rateOfReturnPrefix: '총 수익률은 ',
  rateOfReturnSuffix: '%입니다.',
});

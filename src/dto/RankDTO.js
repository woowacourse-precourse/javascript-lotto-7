class RankDTO {
  lottoRanks;
  profitRate;

  constructor(ranks, profitRate) {
    this.lottoRanks = {
      first: ranks.first.getCount(),
      second: ranks.second.getCount(),
      third: ranks.third.getCount(),
      fourth: ranks.fourth.getCount(),
      fifth: ranks.fifth.getCount(),
    };
    this.profitRate = profitRate;
  }

  static from(lottoRankResult) {
    const { ranks, profit } = lottoRankResult.getLottoRankResult();
    return new RankDTO(ranks, profit);
  }
}

export default RankDTO;

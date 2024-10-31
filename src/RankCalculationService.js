export default class RankCalculationService {
  constructor(rank) {
    this.rank = rank;
    this.rankCounts = Object.fromEntries(
      Object.values(rank).map((rank) => [
        rank.key,
        { ticket: 0, prize: rank.prize },
      ]),
    );
  }

  pickRank(matchingCount, hasBonus) {
    switch (matchingCount) {
      case 6:
        return this.rank.SIX_MATCH.key;
      case 5:
        return hasBonus
          ? this.rank.FIVE_MATCH_WITH_BONUS.key
          : this.rank.FIVE_MATCH.key;
      case 4:
        return this.rank.FOUR_MATCH.key;
      case 3:
        return this.rank.THREE_MATCH.key;
      default:
        return this.rank.NO_MATCH.key;
    }
  }

  updateRankCount(matchingCount, hasBonus) {
    const rankKey = this.pickRank(matchingCount, hasBonus);
    if (this.rankCounts[rankKey]) {
      this.rankCounts[rankKey].ticket += 1;
    }
  }

  getRankCounts() {
    return this.rankCounts;
  }
}

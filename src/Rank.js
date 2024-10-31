import { RANK_OBJECT_ARRAY } from './lib/constants.js';

class Rank {
  static getRank(winningCount, isBonusMatch) {
    return (
      RANK_OBJECT_ARRAY.find(
        (rankObject) =>
          rankObject.winningCount === winningCount &&
          rankObject.isBonusMatch === isBonusMatch,
      )?.rank ?? 0
    );
  }
}

export default Rank;

import { MATCH_REWARD } from "../constants/constants.js";
import { MATCH } from "../constants/constants.js";

class LottoRepository {
  lottos;
  match;
  matchReward;

  constructor() {
    this.lottos = [];
    this.match = [MATCH.init, MATCH.init, MATCH.init, MATCH.init, MATCH.init];
    this.matchReward = [MATCH_REWARD.fifth, MATCH_REWARD.fourth, MATCH_REWARD.third, MATCH_REWARD.second, MATCH_REWARD.first];
  }

  saveLotto(lotto) {
    this.lottos.push(lotto);
  }

  getLottos() {
    return this.lottos;
  }

  getMatch() {
    return this.match;
  }

  updateMatch(number) {
    this.match[number]++;
  }

  getMatchReward() {
    return this.matchReward;
  }
}

export default LottoRepository;
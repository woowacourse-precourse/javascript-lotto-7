import LottoRule from './model/LottoRule.js';

class LottoGameExecutor {
  #lottoRule

  constructor(lottoConfig) {
    this.#lottoRule = new LottoRule(lottoConfig);
  }

  startGame() {

  }
}

export default LottoGameExecutor;
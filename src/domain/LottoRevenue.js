class LottoRevenue {
  #lottoCount;
  #matchResults = {};

  constructor(lottoCount, matchResults) {
    this.#lottoCount = lottoCount;
    this.#matchResults = matchResults;
  }

  getRevenue() {
    const revenue = 62.5;
    return revenue;
  }
}

export default LottoRevenue;
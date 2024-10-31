class Analyzer {
  #lottos;

  #winningTable;

  constructor(lottos) {
    this.#lottos = lottos;
    this.#winningTable = new Map();
  }
}

export default Analyzer;

class Lottos {
  #lottoNumbers;

  constructor(lottoNumbers) {
    this.#lottoNumbers = lottoNumbers;
  }

  getLottoNumbers = () => {
    const lottoList = this.#lottoNumbers.map((lotto) => lotto.getLottoNumber());
    return lottoList;
  };
}

export default Lottos;

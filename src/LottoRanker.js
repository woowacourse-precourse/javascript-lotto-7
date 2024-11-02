class LottoRanker {
  #bonusNumber;
  #nums;

  constructor(nums, bonusNum) {
    this.#bonusNumber = bonusNum;
    this.#nums = nums;
  }

  findMatches(lotto) {
    let howmany = lotto.filter((number) => this.#nums.includes(number)).length;
    console.log(howmany);
    if (howmany === 5 && this.lotto.includes(this.#bonusNumber)) {
      howmany += 1;
    }

    return howmany;
  }
}

export default LottoRanker;

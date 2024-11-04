import isMatched from "../utils/isMatched.js";

class Matcher {
  #matchCount;
  #bonusMatch;

  constructor(myLotto, winnigLotto) {
    this.#matchCount = Matcher.match(myLotto, winnigLotto.numbers);
    this.#bonusMatch = Matcher.matchBonus(myLotto, winnigLotto.bonusNumber);
  }

  static match(myLotto, winningLotto) {
    return myLotto.reduce((acc, number) => acc + isMatched(number, winningLotto), 0);
  }

  static matchBonus(myLotto, bonusNumber) {
    return isMatched(bonusNumber, myLotto);
  }

  get matchCount() {
    return this.#matchCount;
  }

  get bonusMatch() {
    return this.#bonusMatch;
  }
}

export default Matcher;

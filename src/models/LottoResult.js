import LOTTO_CONSTANTS from '../constants/lottoConstants.js';

class LottoResult {
  #firstPlace;
  #secondPlace;
  #thirdPlace;
  #fourthPlace;
  #fifthPlace;

  constructor() {
    this.#firstPlace = 0;
    this.#secondPlace = 0;
    this.#thirdPlace = 0;
    this.#fourthPlace = 0;
    this.#fifthPlace = 0;
  }

  winFirstPlace() {
    this.#firstPlace += 1;
  }

  winSecondPlace() {
    this.#secondPlace += 1;
  }

  winThirdPlace() {
    this.#thirdPlace += 1;
  }

  winFourthPlace() {
    this.#fourthPlace += 1;
  }

  winFifthPlace() {
    this.#fifthPlace += 1;
  }

  getFirstPlaceCount() {
    return this.#firstPlace;
  }

  getSecondPlaceCount() {
    return this.#secondPlace;
  }

  getThirdPlaceCount() {
    return this.#thirdPlace;
  }

  getFourthPlaceCount() {
    return this.#fourthPlace;
  }

  getFifthPlaceCount() {
    return this.#fifthPlace;
  }

  getFirstPlaceMoney() {
    return this.#firstPlace * LOTTO_CONSTANTS.FIRST_PLACE_MONEY;
  }

  getSecondPlaceMoney() {
    return this.#secondPlace * LOTTO_CONSTANTS.SECOND_PLACE_MONEY;
  }

  getThirdPlaceMoney() {
    return this.#thirdPlace * LOTTO_CONSTANTS.THIRD_PLACE_MONEY;
  }

  getFourthPlaceMoney() {
    return this.#fourthPlace * LOTTO_CONSTANTS.FOURTH_PLACE_MONEY;
  }

  getFifthPlaceMoney() {
    return this.#fifthPlace * LOTTO_CONSTANTS.FIFTH_PLACE_MONEY;
  }
}

export default LottoResult;

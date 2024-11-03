import { Random } from "@woowacourse/mission-utils";

const MIN_PRICE = 1000;

class Consumer {
  #lottoTickets = [];

  constructor(price) {}

  isNumber() {
    // 보너스 번호 검사도 trim()사용해서 여기서 함
    if (!/^[0-9]+$/.test(price)) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.IS_NUMBER);
    }
  }

  isUnitOfPrice() {
    if (!(price % MIN_PRICE === 0)) {
      throw new Error(PRICE_ERROR_MESSAGE.PRICE_INCORRECT);
    }
  }

  minPrice() {
    if (price < MIN_PRICE) {
      throw new Error(PRICE_ERROR_MESSAGE.MIN_PRICE_MESSAGE);
    }
  }

  maxPrice() {
    const MAX_PRICE = 100000;
    if (MAX_PRICE < price) {
      throw new Error(PRICE_ERROR_MESSAGE.MAX_PRICE_MESSAGE);
    }
  }

  getLottoCount() {
    lottoCount = parseInt(price / 1000, 10);
    return lottoCount;
  }

  getOrderLotto() {
    for (i = 0; i < lottoCount; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      lotto = new Lotto(randomNumber);
      this.#lottoTickets.push(lotto);
    }
  }
  ///당첨번호 유효성
  CheckWinningNumberInput() {
    if (!/^[0-9]+(,\s*[0-9]+)*$/.test(winningNumber)) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.ONLY_NUMBER_COMMA);
    }
  }

  isWinningNumberLength() {
    const MAX_WINNING_NUMBER_LENGTH = 6;
    if (winningNumber.length !== MAX_WINNING_NUMBER_LENGTH) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.INCORRECT_NUMBER_COUNT);
    }
  }

  checkNumberRange() {
    // 보너스 번호, 당첨 번호 범위도 여기서 함
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 45;
    if (winningNumber < MIN_NUMBER || MAX_NUMBER < winningNumber) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.NUMBER_RANGE);
    }
  }

  isDuplicateNumber() {
    checkduplicate = new set(winningNumber);
    if (checkduplicate.size !== winningNumber.length) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  // 보너스 번호 유효성 검사
  isDuplicateBonusNumber() {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }

  //수익률
  GetrateOfReturn() {
    ratrOfReturn = (prizeMoney / price) * 100;
    return ratrOfReturn.toFixed(1);
  }
}

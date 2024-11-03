import Lotto from './Lotto.js';
import { Prize, Standard } from './Enum.js';

class Logic {
  static parseWinningNumbers(input) {
    return input
      .split(',')
      .map((e) => Number(e))
      .sort((a, b) => a - b);
  }

  static matchingPlace(lottos, winningNumbers, bonusNumber) {
    let places = [0, 0, 0, 0, 0];
    lottos.forEach((lotto) => {
      let diff = winningNumbers
        .getLottoNumber()
        .filter((el) => lotto.getLottoNumber().includes(el));
      if (diff.length === 3) places[0] += 1;
      else if (diff.length === 4) places[1] += 1;
      else if (
        diff.length === 5 &&
        lotto.getLottoNumber().includes(bonusNumber)
      )
        places[3] += 1;
      else if (diff.length === 5) places[2] += 1;
      else if (diff.length === 6) places[4] += 1;
    });
    return places;
  }

  static getProfit(result, amount) {
    let sum = 0;
    sum =
      sum +
      result[0] * Prize.FIFTH_PRIZE +
      result[1] * Prize.FORUTH_PRIZE +
      result[2] * Prize.THIRD_PRIZE +
      result[3] * Prize.SECOND_PRIZE +
      result[4] * Prize.FIRST_PRIZE;
    sum /= amount * Standard.PRICE_OF_LOTTO;
    return sum.toFixed(1);
  }
}
export default Logic;

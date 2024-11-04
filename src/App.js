import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  INPUT_MESSAGE,
  LOTTO_PRICE,
  LOTTO_MESSAGE,
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBER_OF_LOTTO_NUMBERS,
  THREE_PRICE,
  FOUR_PRICE,
  FIVE_PRICE,
  SIX_PRICE,
  BONUS_PRICE,
} from './constants/constants.js';
import {
  getWinningNumbers,
  getBonusWinningNumber,
} from './lottoHelper/winningNumbers.js';
import {
  validateRangeOfLottoPrice,
  validateNumberTypeLottoPrice,
  validateAmountOfLotto,
} from './validate/validator.js';

function purchaseLotto(price) {
  const amountOfLotto = price / LOTTO_PRICE;
  validateAmountOfLotto(amountOfLotto);
  return amountOfLotto;
}

function howManyCorrectNumbers(lottoList, winningNumbers, bonusWinningNumber) {
  let threeCorrectCount = 0;
  let fourCorrectCount = 0;
  let fiveCorrectCount = 0;
  let fiveBonusCorrectCount = 0;
  let sixCorrectCount = 0;
  let totalWinningPrice = 0;
  lottoList.forEach((lottoNumber) => {
    let count = 0;
    winningNumbers.forEach((number) => {
      if (lottoNumber.getNumbers().includes(number)) {
        count += 1;
      }
    });
    if (count === 3) {
      threeCorrectCount += 1;
    } else if (count === 4) {
      fourCorrectCount += 1;
    } else if (count === 5) {
      if (lottoNumber.includes(bonusWinningNumber)) {
        fiveBonusCorrectCount += 1;
      }
      fiveCorrectCount += 1;
    } else if (count === 6) {
      sixCorrectCount += 1;
    }
  });
  totalWinningPrice += howManyCorrectResult(3, THREE_PRICE, threeCorrectCount);
  totalWinningPrice += howManyCorrectResult(4, FOUR_PRICE, fourCorrectCount);
  totalWinningPrice += howManyCorrectResult(5, FIVE_PRICE, fiveCorrectCount);
  totalWinningPrice += BonusCorrectResult(
    5,
    BONUS_PRICE,
    fiveBonusCorrectCount,
  );
  totalWinningPrice += howManyCorrectResult(6, SIX_PRICE, sixCorrectCount);
  return totalWinningPrice;
}

function howManyCorrectResult(howMany, price, count) {
  function addCommas(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const winningPrice = count * price;
  Console.print(`${howMany}개 일치 (${addCommas(price)}원) - ${count}개`);
  return winningPrice;
}

function BonusCorrectResult(howMany, price, count) {
  function addCommas(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const winningPrice = count * price;
  Console.print(
    `${howMany}개 일치, 보너스 볼 일치 (${addCommas(price)}원) - ${count}개`,
  );
  return winningPrice;
}

function generateLottoNumbers(amountOfLotto) {
  const lottoNumbers = [];
  for (let i = 0; i < amountOfLotto; i += 1) {
    lottoNumbers.push(
      Random.pickUniqueNumbersInRange(
        MIN_NUMBER,
        MAX_NUMBER,
        NUMBER_OF_LOTTO_NUMBERS,
      ),
    );
  }
  return lottoNumbers;
}

function calculatePercentage(lottoPrice, winningPrice) {
  return (Number.parseFloat(winningPrice / lottoPrice) * 100).toFixed(1);
}

class App {
  async run() {
    try {
      const price = await Console.readLineAsync(
        INPUT_MESSAGE.INPUT_AMOUNT_MESSAGE,
      );

      validateNumberTypeLottoPrice(price);
      validateRangeOfLottoPrice(price);

      const amountOfLotto = purchaseLotto(price);
      Console.print(`${amountOfLotto}개를 구매했습니다.`);

      const lottoList = generateLottoNumbers(amountOfLotto).map(
        (lotto) => new Lotto(lotto),
      );
      lottoList.forEach((lotto) => {
        lotto.sortLottoNumbers();
        lotto.printNumbers();
      });

      const winningNumbers = await getWinningNumbers();
      const bonusWinningNumber = await getBonusWinningNumber();

      Console.print(LOTTO_MESSAGE.LOTTO_RESULT_MESSAGE);
      Console.print(LOTTO_MESSAGE.LOTTO_RESULT_SEPERATOR);
      const totalWinningPrice = howManyCorrectNumbers(
        lottoList,
        winningNumbers,
        bonusWinningNumber,
      );
      const percentage = calculatePercentage(
        parseInt(price, 10),
        totalWinningPrice,
      );

      Console.print(`총 수익률은 ${percentage}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;

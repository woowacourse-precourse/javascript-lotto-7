import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    if (!this.#validate(numbers)) throw new Error('[ERROR] 잘못된 입력입니다.');
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) return false;
    if (numbers.length !== new Set(numbers).size) return false;
    if (numbers.some((item) => isNaN(item))) return false;
    if (numbers.some((item) => item < 1 || item > 45)) return false;
    if (numbers.some((item) => item !== Math.floor(item))) return false;
    return true;
  }

  checkLottoResult(lottoArr, bonusNumber) {
    const resultObj = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    lottoArr.forEach((lotto) => {
      const price = this.#lottoPrice(lotto, bonusNumber);
      resultObj[price]++;
    });
    return resultObj;
  }

  #lottoPrice(lotto, bonusNumber) {
    let count = 0;
    lotto.forEach((num) => {
      if (this.#numbers.includes(num)) count++;
    });
    if (count === 6) return 'first';
    if (count === 5) {
      if (lotto.includes(bonusNumber)) return 'second';
      return 'third';
    }
    if (count === 4) return 'fourth';
    if (count === 3) return 'fifth';
  }

  printLottoResult(result, price) {
    const totalPrice = this.#totalPrice(result);
    const totalRate = this.#totalRate(totalPrice, price);

    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
    Console.print(`총 수익률은 ${totalRate}%입니다.`);
  }

  #totalPrice(result) {
    return (
      result.first * 2000000000 +
      result.second * 30000000 +
      result.third * 1500000 +
      result.fourth * 50000 +
      result.fifth * 5000
    );
  }

  #totalRate(totalPrice, price) {
    return ((totalPrice / price) * 100).toFixed(1);
  }
}

export default Lotto;

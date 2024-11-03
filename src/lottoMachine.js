import { Console, Random } from '@woowacourse/mission-utils';

class LottoMachine {
  constructor() {}

  async buy() {
    let price;
    while (true) {
      try {
        Console.print('구입금액을 입력해 주세요.');
        price = +(await Console.readLineAsync(''));
        if (!this.#validate(price)) {
          throw new Error('[ERROR] 잘못된 입력입니다. 다시 입력해 주세요.');
        }
        Console.print('');
        return price;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validate(price) {
    if (isNaN(price)) return false;
    if (price % 1000 !== 0) return false;
    return true;
  }

  release(price) {
    const count = price / 1000;
    Console.print(`${count}개를 구매했습니다.`);
    const lottoArr = this.#releaseLotto(count);
    lottoArr.forEach((item) => Console.print(`[${item.join(', ')}]`));
    Console.print('');
    return lottoArr;
  }

  #releaseLotto(count) {
    const releaseArr = [];
    const releaseStrArr = [];
    while (releaseArr.length < count) {
      const numArr = Random.pickUniqueNumbersInRange(1, 45, 6);
      numArr.sort((a, b) => a - b);
      const numStr = numArr.join(',');
      if (!releaseStrArr.includes(numStr)) {
        releaseArr.push(numArr);
        releaseStrArr.push(numStr);
      }
    }
    return releaseArr;
  }
}

export default LottoMachine;

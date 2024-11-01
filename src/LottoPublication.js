import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoPublication {
  #publishedLottoList = [];

  constructor() {}

  getPublishedLottoList() {
    return this.#publishedLottoList;
  }

  publicationLotto(publicationCount) {
    for (let i = 0; i < publicationCount; ++i) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => {
        return a - b;
      });
      const lotto = new Lotto(numbers);
      this.#publishedLottoList.push(lotto);
    }
  }

  showPublishedLottoList() {
    Console.print('\n' + this.#publishedLottoList.length + '개를 구매했습니다.');
    this.#publishedLottoList.forEach((lotto) => {
      lotto.printNumbers();
    });
  }
}

export default LottoPublication;

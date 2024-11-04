import { Console, Random } from '@woowacourse/mission-utils';
class Draw {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    if (Number.isNaN(money) || money % 1000 != 0 || money <= 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }
  
  getPickedNumbers() {
    const draws = this.#money / 1000;
    Console.print('\n' + draws + '개를 구매했습니다.');

    const pickedNumbers = [];
    for (let i = 0; i < draws; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      Console.print(`[${numbers.join(', ')}]`);
      pickedNumbers.push(numbers);
    }
    return pickedNumbers;
  }
}
export default Draw;

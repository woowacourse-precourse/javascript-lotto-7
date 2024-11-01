import { Console, Random } from '@woowacourse/mission-utils';
class Draw {
  static getLotteryNumbers(money) {
    const draws = money / 1000;
    Console.print('\n' + draws + '개를 구매했습니다.');
    
    const lotteryNumbers = [];
    for (let i = 0; i < draws; i++) {
      const pickedNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${pickedNumbers.join(', ')}]`);
      lotteryNumbers.push(pickedNumbers);
    }
    return lotteryNumbers;
  }
}
export default Draw;
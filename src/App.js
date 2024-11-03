import { Console } from '@woowacourse/mission-utils';
import { getPaidMoney, getLottoNumbers } from './InputHandler.js';
import Draw from './Draw.js';
import Lotto from './Lotto.js';
import Stats from './Stats.js';

class App {
  async run() {
    try {
      const paidMoney = await getPaidMoney();
      const draw = new Draw(paidMoney);
      const pickedNumbers = draw.getPickedNumbers();
      const lotto = new Lotto(await getLottoNumbers());
      const lottoNumbers = lotto.getNumbers();
      const bonusNumber = await lotto.getBonusNumbers();
      const winResult = this.playLotto(
        lottoNumbers,
        bonusNumber,
        pickedNumbers
      );
      const stats = new Stats(winResult, bonusNumber);
      stats.printStats();

      const sum =
        stats.three * 5000 +
        stats.four * 50000 +
        stats.five * 15000000 +
        stats.fiveb * 30000000 +
        stats.six * 2000000000;
      
      Console.print(`총 수익률은 ${((sum/paidMoney)*100).toFixed(1)}% 입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  playLotto(nums, bnum, pickedNumsArr) {
    const winResult = [];
    const totalNums = [...nums, bnum];

    pickedNumsArr.forEach((pickedNums) => {
      const winNums = pickedNums.filter((pickedNum) => {
        return totalNums.includes(pickedNum); //1,2,3
      });
      winResult.push(winNums);
    });
    //winResult = [[],[1,2,3],[2,4,3,5,2,1,9]]
    return winResult;
  }
}

export default App;

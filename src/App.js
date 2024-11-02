import { Console } from '@woowacourse/mission-utils';
import Draw from './Draw.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const draw = new Draw(await this.payingMoney());
      const pickedNumbers = draw.getPickedNumbers();
      const lotto = new Lotto(await this.enteringLottoNumbers());
      const lottoNumbers = lotto.getNumbers();
      const bonusNumber = await lotto.getBonusNumbers();
      this.playLotto(lottoNumbers, bonusNumber, pickedNumbers);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async payingMoney() {
    Console.print('구입금액을 입력해 주세요.');
    return Number(await Console.readLineAsync(''));
  }

  async enteringLottoNumbers() {
    Console.print('당첨 번호를 입력해 주세요.');
    const enteredNumbers = await Console.readLineAsync('');
    return enteredNumbers.split(',');
  }

  playLotto(nums, bnum, pickedNumsArr){
    const winResult = [];
    const totalNums = [...nums,bnum];

    pickedNumsArr.forEach(pickedNums => {
      const winNums = pickedNums.filter((pickedNum)=>{
        return totalNums.includes(pickedNum); //1,2,3
      });
      winResult.push(winNums);
    })
    //winResult = [[],[1,2,3],[2,4,3,5,2,1,9]]
    return winResult;
  }


}

export default App;

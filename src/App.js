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

  /*
  async getBonusNumbers() {
    Console.print('\n보너스 번호를 입력해주세요.');
    const bonusNumber = await Console.readLineAsync('');
    if(!(1<=bonusNumber && bonusNumber<=45)){
      throw new Error("[ERROR] 1부터 45 범위 내의 번호 1개를 입력해주세요.");
    }
    return bonusNumber;
  }

  playLotto(nums, bnum, pickednums){
    for()
  }*/
}

export default App;

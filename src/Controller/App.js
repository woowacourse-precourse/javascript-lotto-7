import Lotto from '../Model/Lotto.js';
import Input from '../View/Input.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    const lotteryNumber = await Input.lotteryNumber();
    const bonusNumber = await Input.bonusNumber();

    const lotto = new Lotto(lotteryNumber);

    console.log(purchaseAmount);
    console.log(lotteryNumber);
    console.log(lotto);
    console.log(bonusNumber);
  }
}

export default App;

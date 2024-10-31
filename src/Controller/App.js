import Input from '../View/Input.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    const lotteryNumber = await Input.lotteryNumber();
    const bonusNumber = await Input.bonusNumber();
    console.log(purchaseAmount);
    console.log(lotteryNumber);
    console.log(bonusNumber);
  }
}

export default App;

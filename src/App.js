import BonusLotto from './BonusLotto.js';
import Lotto from './Lotto.js';
import Profit from './Profit.js';
import Rank from './Rank.js';

class App {
  async run() {
    // const winningResult = new Rank([1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 5, 7]);
    // console.log(winningResult.getRank());

    // const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    // console.log(lotto);

    // const bonus = new BonusLotto([1, 2, 3, 4, 5, 6], 7);
    // console.log(bonus);

    const profit = new Profit(8000, [0, 0, 0, 0, 1]);
    console.log(profit.getProfit());
  }
}

export default App;

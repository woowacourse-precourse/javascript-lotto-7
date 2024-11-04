import GetInput from './input/GetInput.js';
import MakeLotto from './util/MakeLotto.js';
import ForPurchase from './output/ForPurchase.js';

class App {
  async run() {

    const lotto = await MakeLotto.make();
    const input = await GetInput.print();
    console.log(input);
  }
}

export default App;

import GetInput from './input/GetInput.js';
import MakeLotto from './util/MakeLotto.js';

class App {
  async run() {

    //money, winningNumbers, bonus
    const input = await GetInput.print();
    const lotto = MakeLotto.make(input.money / 1000);
    console.log(lotto);
    console.log(input);
  }
}

export default App;

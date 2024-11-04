import GetInput from './input/GetInput.js';
import MakeLotto from './util/MakeLotto.js';
import CheckHowmuch from './util/CheckHowmuch.js';

class App {
  async run() {
    const lotto = await MakeLotto.make();
    const input = await GetInput.print();
    CheckHowmuch.run(lotto, input.lotto.numbers, input.bonus);
  }
}

export default App;

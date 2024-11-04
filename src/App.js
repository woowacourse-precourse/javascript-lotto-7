import GetInput from './input/GetInput.js';
import MakeLotto from './util/MakeLotto.js';


class App {
  async run() {

    const lotto = await MakeLotto.make();
    const input = await GetInput.print();
    console.log(input);
  }
}

export default App;

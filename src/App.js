import Lotto from './Lotto.js';

class App {
  async run() {
    console.log(new Lotto([-1, 12, 3, 24, 99, 5]).getNumbers());
  }
}

export default App;

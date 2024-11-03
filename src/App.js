import Lotto from "./Lotto.js";
import printLottos from "./print/printLotto.js";
class App {
  async run() {
    printLottos([
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([6, 4, 3, 2, 1, 7]),
    ]);
  }
}

export default App;

import Lotto from "./Lotto";

class App {
  async run() {
    const lotto = new Lotto();
    await lotto.start();
  }
}

export default App;

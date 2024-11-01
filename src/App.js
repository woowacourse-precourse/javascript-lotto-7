import Lotto from "./Lotto.js";

class App {
  async run() {
    const lottoCount = await Lotto.buy();
    console.log("end App");
  }
}

export default App;

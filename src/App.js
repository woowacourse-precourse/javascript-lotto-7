import { getLottoCnt } from "./BuyPrice.js";
import { makeLotto } from "./lottoNumber.js";

class App {
  async run() {
    const LottoCnt = await getLottoCnt();
  }
}

export default App;

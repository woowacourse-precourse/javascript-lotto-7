import { read, print, random } from "./lib/utils.js";
import LottoProcess from "./LottoProcess.js";

class App {
  constructor() {
    this.io = {
      read,
      print,
    };
    this.random = random;
    this.lottoProcess = new LottoProcess(this.io, this.random);
  }

  async run() {
    await this.lottoProcess.runProcess();
  }
}

export default App;

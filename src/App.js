import LottoPlayer from "./LottoPlayer.js";

class App {
  async run() {
    const lottoPlayer = new LottoPlayer();
    await lottoPlayer.play();
  }
}

export default App;

import LottoActions from "./LottoActions.js";

class App {
  async run() {
    await new LottoActions().play();
  }
}

export default App;

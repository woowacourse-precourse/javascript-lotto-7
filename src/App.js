import Game from "./Game.js";

class App {
  async run() {
    await Game.startGame();
  }
}

export default App;
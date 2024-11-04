import Game from './Controller/Game.js';

class App {
  async run() {
    const game = new Game();
    await game.process();
  }
}

export default App;

import View from './View.js';

class App {
  async run() {
    try {
      const view = new View();
      view.startLotto();
    } catch (error) {
      console.log(error.message);
      throw new Error('[Error]');
    }
  }
}

export default App;

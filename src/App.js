import Input from './View/Input.js';

class App {
  async run() {
    await Input.getPurchaseAmount();
  }
}

export default App;

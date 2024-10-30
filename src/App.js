import Input from './Input.js';

class App {
  async run() {
    const input = new Input();
    await input.getPurchasePrice();
  }
}

export default App;

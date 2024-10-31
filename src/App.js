import { View } from './view/View.js';

class App {
  async run() {
    const view = new View();

    while (true) {
      const amount = await view.promptPurchaseAmount();

      if (isNaN(amount)) {
        view.printErrorMessage('[ERROR]');
        continue;
      }
      if (amount <= 0) {
        view.printErrorMessage('[ERROR]');
        continue;
      }
      if (amount % 1000 !== 0) {
        view.printErrorMessage('[ERROR]');
        continue;
      }

      break;
    }
  }
}

export default App;

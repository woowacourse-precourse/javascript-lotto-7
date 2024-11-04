import validationLotto from './validations/validationLotto.js';
import inputView from './views/inputView.js';
import outputView from './views/outputView.js';
import Controller from './controllers/Controller.js';
import InputHandler from './handlers/InputHandler.js';

class App {
  async run() {
    const inputHandler = new InputHandler(
      inputView,
      outputView,
      validationLotto
    );

    const controller = new Controller(outputView, inputHandler);
    await controller.start();
  }
}

export default App;

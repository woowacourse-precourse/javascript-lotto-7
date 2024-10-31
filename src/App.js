import validationLotto from './validations/validationLotto.js';
import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import Controller from './controllers/Controller.js';
import InputHandler from './handlers/InputHandler.js';

class App {
  async run() {
    const outputView = new OutputView();
    const inputView = new InputView();
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

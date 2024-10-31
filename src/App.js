import validationLotto from './validation/validationLotto.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import Controller from './controller/Controller.js';
import InputHandler from './handler/InputHandler.js';

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

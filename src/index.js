import App from './App.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

const inputView = new InputView();
const outputView = new OutputView();

const app = new App(inputView, outputView);
await app.run();

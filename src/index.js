import App from "./App.js";
import InputView from './view/inputView.js';
import OutputView from './view/outputView.js';

const inputView = new InputView();
const outputView = new OutputView();

const app = new App(inputView, outputView);
await app.run();

import App from './App.js';
import InputView from './InputView.js';

const inputView = new InputView();
const app = new App(inputView);
await app.run();

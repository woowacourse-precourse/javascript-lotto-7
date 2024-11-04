import LottoController from "./controllers/LottoController.js";

class App {
    async run() {
        await new LottoController().lottoProcess();
    }
}

export default App;

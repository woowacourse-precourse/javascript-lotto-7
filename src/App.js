import LottoController from './controllers/LottoController.js';
import { Input } from './views/index.js';

class App {
    async run() {
        Input.getMoney();
        // const lottoController = new LottoController();
        // await lottoController.run();
    }
}

export default App;

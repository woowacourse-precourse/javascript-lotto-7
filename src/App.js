import { LottoController } from "./controllers/LottoController";

class App {
	async run() {
		const lottoController = new LottoController();
		await lottoController.run();
	}
}

export default App;

import Input from "./Input.js";

class App {
	#lottoMoney;
	#lottoNumbers;
	#bonusNumber;

	constructor() {
		this.userInput = new Input();
	}

	async run() {
		this.#lottoMoney = await this.userInput.getLottoMoney();
	}
}

export default App;

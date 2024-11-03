import Lotto from "./Lotto.js";
import InputHandler from "./InputHandler.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
        const userMoney = await inputHandler.askUserMoney();
        const issuedLottos = Lotto.issueLottos(userMoney);

        const lotto = new Lotto(issuedLottos);
        await lotto.initializeLotto();
        this.printResult(lotto, userMoney);
    }

    printResult(lotto, userMoney) {
        const result = lotto.calculateResult();
        lotto.printLottoSummary(result, userMoney);  
    }
}

export default App;
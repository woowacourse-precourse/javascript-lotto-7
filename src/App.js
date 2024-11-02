import Lotto from "./Lotto.js"
import InputHandler from "./InputHandler.js";
import { validateMoney, validateWinningNumbers, validateBonusNumber } from "./Validator.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
            
        const userMoney =  await inputHandler.askUserMoney();
        validateMoney(userMoney);
        const issuedLottos = Lotto.issueLottos(userMoney);

        const winningNumber =  await inputHandler.askWinningNumbers();
        const bonusNumber = await inputHandler.askBonusNumber();

        const lotto = new Lotto(issuedLottos, winningNumber, bonusNumber);
        this.printResult(lotto, userMoney);
    }

    printResult(lotto, userMoney) {
        const result = lotto.calculateResult();
        lotto.printLottoSummary(result, userMoney);  
    }
}

export default App;
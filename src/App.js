import Lotto from "./Lotto.js";
import InputHandler from "./InputHandler.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
        const userMoney = await inputHandler.askUserMoney();
        const issuedLottos = Lotto.issueLottos(userMoney);

        const winningNumbers = await inputHandler.askWinningNumbers();
        const winningNumbersArray = winningNumbers.split(',').map(num => num.trim());
        const bonusNumber = await inputHandler.askBonusNumber(winningNumbersArray);

        const lotto = new Lotto(winningNumbersArray);
        lotto.getBonusNumber(bonusNumber);
        lotto.getIssuedLottos(issuedLottos);
        this.printResult(lotto, userMoney);
    }

    printResult(lotto, userMoney) {
        const result = lotto.calculateResult();
        lotto.printLottoSummary(result, userMoney);  
    }
}

export default App;
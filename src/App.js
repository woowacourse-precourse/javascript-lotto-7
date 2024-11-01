import Lotto from "./Lotto.js"
import InputHandler from "./InputHandler.js";
import { validateMoney, validateWinningNumbers } from "./Validator.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
            
        const userMoney =  await inputHandler.askUserMoney();
        validateMoney(userMoney);
        Lotto.issueLottos(userMoney);

        const winningNumber =  await inputHandler.askWinningNumbers();
        const bonusNumber = await inputHandler.askBonusNumber();
        const lotto = new Lotto(winningNumber, bonusNumber);

        

        //보너스 번호 받기
        //보너스 번호 검증

        //당첨 내역과 수익률 출력
    }
}

export default App;
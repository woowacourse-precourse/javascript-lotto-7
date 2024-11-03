import InputHandler from "./InputHandler.js";
import Lotto from "./Lotto.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
        const lottoCount = await inputHandler.getLottoTryCount();
        console.log(`${lottoCount}개를 구매했습니다.`);

        const jackpotNumbers = await inputHandler.getJackpotNumbers();
        const bonusNumber = await inputHandler.getBonusNumber();

        const lottoNumbers = Lotto.generateLottoNumbers(lottoCount);
        Lotto.printLottoNumbers(lottoNumbers);

        const results = Lotto.calculateResults(lottoNumbers, jackpotNumbers, bonusNumber);
        console.log(results);
    }
}

export default App;

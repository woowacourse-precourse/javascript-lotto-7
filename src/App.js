import InputHandler from "./InputHandler.js";
import Lotto from "./Lotto.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
        const lottoCount = await inputHandler.getLottoTryCount();
        console.log(`${lottoCount}개를 구매했습니다.`);

        await inputHandler.getJackpotNumbers();
        await inputHandler.getBonusNumber();

        const lottoNumbers = Lotto.generateLottoNumbers(lottoCount);
        Lotto.printLottoNumbers(lottoNumbers);
    }
}

export default App;

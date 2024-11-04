import Lotto from "../Lotto.js";
import { inputCash, inputWinningNumbers, inputBonusNumbers } from "../utils/inputView.js";
import Consumer from "./Consumer.js";
import { printAllLotto, printGuideBuyLotto } from "../utils/outputView.js";
import Comparision from "../service/Comparision.js";

class LottoGame{
    #lottos = [];
    #comparision;

    async playGame(){
        const cash = await inputCash();
        const consumer = new Consumer(cash);
        const lottoCount = consumer.buyLottoCount();

        this.#generateLotto(lottoCount);
    }

    #generateLotto(count){
        this.#lottos = Array.from({length: count}, () => Lotto.create());
    }

    #displayLotto(count){
        printGuideBuyLotto(count);
        printAllLotto(this.#lottos);
    }

    async #processWinning(){
        const winNumber = await inputWinningNumbers();
        const bonusNumber = await inputBonusNumbers();
        this.#comparision = new Comparision(winNumber, bonusNumber);
    }
}
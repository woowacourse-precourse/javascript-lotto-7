import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "./LottoManagerIO.js";
import { countMatchingNumbers, generateRandomNumbers } from "./lottoUtils.js";
import Lotto from "./Lotto.js";

class LottoManager {
    #purchasePrice
    #lottoCount
    #generatedLottos = []
    #winLotto
    #bonusNumber

    constructor(){}

    generateLottos(lottoCount){
        for(let i = 0; i < lottoCount; i++){
            let lottoNumbers = generateRandomNumbers();
            this.#generatedLottos.push(new Lotto(lottoNumbers));
        }
    }

    generateWinLotto(lottoNumbers){
        this.#winLotto = new Lotto(lottoNumbers);
    }

    async runGame(){
        this.#purchasePrice = await LottoManagerIO.inputPurchasePrice();
        this.#lottoCount = LottoManagerIO.printLottoCount(this.#purchasePrice);
        this.generateLottos(this.#lottoCount);
        LottoManagerIO.printGeneratedLottos(this.#generatedLottos);
        this.generateWinLotto(await LottoManagerIO.inputWinNumber());
        this.#bonusNumber = await LottoManagerIO.inputBonusNumber();
    }

    async calculateResult(){
        for(let i = 0; i < this.#lottoCount; i ++){
            countMatchingNumbers(this.#generatedLottos[i].getNumbers(), this.#winLotto.getNumbers());
        }
    }

    async displayResult(){

    }
}

export default LottoManager;
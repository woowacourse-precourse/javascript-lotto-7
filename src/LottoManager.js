import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "./LottoManagerIO.js";
import { isMatchBonusNumber, countMatchingNumbers, generateRandomNumbers, rankResult } from "./lottoUtils.js";
import Lotto from "./Lotto.js";

class LottoManager {
    #purchasePrice
    #lottoCount
    #generatedLottos = []
    #winLotto
    #winBonusNumber

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

    countAndEvaluateResult(){
        for(let i = 0; i < this.#lottoCount; i++){
            let matchingCount = countMatchingNumbers(this.#generatedLottos[i].getNumbers(), this.#winLotto.getNumbers());
            let isMatchBonus = isMatchBonusNumber(this.#generatedLottos[i].getNumbers(), this.#winBonusNumber);
            rankResult(matchingCount, isMatchBonus);
        }
    }

    async runGame(){
        this.#purchasePrice = await LottoManagerIO.inputPurchasePrice();
        this.#lottoCount = LottoManagerIO.printLottoCount(this.#purchasePrice);
        this.generateLottos(this.#lottoCount);
        LottoManagerIO.printGeneratedLottos(this.#generatedLottos);
        this.generateWinLotto(await LottoManagerIO.inputWinNumber());
        this.#winBonusNumber = await LottoManagerIO.inputBonusNumber();
    }

    async calculateResult(){
        this.countAndEvaluateResult();
    }

    async displayResult(){

    }
}

export default LottoManager;
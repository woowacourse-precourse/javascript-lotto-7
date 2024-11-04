import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "./LottoManagerIO.js";
import { isMatchBonusNumber, countMatchingNumbers, generateRandomNumbers, rankResult } from "./lottoUtils.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";

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

    countAndEvaluateResult(lottoResult){
        for(let i = 0; i < this.#lottoCount; i++){
            let matchingCount = countMatchingNumbers(this.#generatedLottos[i].getNumbers(), this.#winLotto.getNumbers());
            let isMatchBonus = isMatchBonusNumber(this.#generatedLottos[i].getNumbers(), this.#winBonusNumber);
            let eachLottoResult = rankResult(matchingCount, isMatchBonus)
            lottoResult.updateLottoResult(eachLottoResult);
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
        const lottoResult = new LottoResult();
        this.countAndEvaluateResult(lottoResult);
    }

    async displayResult(){

    }
}

export default LottoManager;
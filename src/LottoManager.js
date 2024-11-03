import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "./LottoManagerIO.js";
import { generateRandomNumbers } from "./LottoUtils.js";
import Lotto from "./Lotto.js";

class LottoManager {
    #purchasePrice
    #lottoCount
    #generatedLottos = []

    constructor(){}

    generateLottos(lottoCount){
        for(let i = 0; i < lottoCount; i++){
            let lottoNumbers = generateRandomNumbers();
            this.#generatedLottos.push(new Lotto(lottoNumbers));
        }
    }

    async run(){
        this.#purchasePrice = await LottoManagerIO.getPurchasePrice();
        this.#lottoCount = LottoManagerIO.printLottoCount(this.#purchasePrice);
        this.generateLottos(this.#lottoCount);
    }
}

export default LottoManager;
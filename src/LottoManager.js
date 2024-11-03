import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "./LottoManagerIO.js";

class LottoManager {
    #purchasePrice
    #generatedLottoNumber

    constructor(){}

    async run(){
        this.#purchasePrice = await LottoManagerIO.getPurchasePrice();
        this.#generatedLottoNumber = LottoManagerIO.printGeneratedLottoCount(this.#purchasePrice);
    }
}

export default LottoManager;
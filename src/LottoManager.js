import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "./LottoManagerIO.js";

class LottoManager {
    #purchasePrice
    #generatedLottoNumber

    constructor(){}

    async run(){
        //const lottoManagerIO = new LottoManagerIO();
        this.#purchasePrice = await LottoManagerIO.printPurchasePrice();
    }
}

export default LottoManager;
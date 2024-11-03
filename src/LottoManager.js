import { Console } from "@woowacourse/mission-utils";

class LottoManager {
    #purchasePrice
    #generatedLottos

    constructor(purchasePrice){
        this.#purchasePrice = purchasePrice;
    }
}

export default LottoManager;
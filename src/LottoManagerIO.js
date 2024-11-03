import { Console } from "@woowacourse/mission-utils"
import { calculateLottoCount } from "./LottoUtils.js";

class LottoManagerIO {
    static #INPUT_PURCHASE_PRICE_MESSAGE = "구입금액을 입력해 주세요."
    static #OUTPUT_PURCHASE_PRICE_MESSAGE = "개를 구매했습니다."
    
    static async getPurchasePrice(){
        let purchasePrice = await Console.readLineAsync(LottoManagerIO.#INPUT_PURCHASE_PRICE_MESSAGE);
        return purchasePrice;
    }

    static printLottoCount(INPUT_PURCHASE_PRICE){
        let lottoCount = calculateLottoCount(INPUT_PURCHASE_PRICE);
        Console.print(`${lottoCount}${this.#OUTPUT_PURCHASE_PRICE_MESSAGE}`);
        return lottoCount;
    }

    static printGeneratedLottos(generatedLottos){
        for(let i = 0; i < generatedLottos.length; i++){
            Console.print(`[${generatedLottos[i].getNumbers().join(', ')}]`);
        }
    }
}

export default LottoManagerIO;
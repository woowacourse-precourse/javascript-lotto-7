import { Console } from "@woowacourse/mission-utils"

class LottoManagerIO {
    static #INPUT_PURCHASE_PRICE_MESSAGE = "구입금액을 입력해 주세요."
    static #OUTPUT_PURCHASE_PRICE_MESSAGE = "개를 구매했습니다."
    
    static async printPurchasePrice(){
        let purchasePrice = await Console.readLineAsync(LottoManagerIO.#INPUT_PURCHASE_PRICE_MESSAGE);
        return purchasePrice
    }
}

export default LottoManagerIO;
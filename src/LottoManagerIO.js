import { Console } from "@woowacourse/mission-utils"
import { calculateLottoCount } from "./LottoUtils.js";

class LottoManagerIO {
    static #INPUT_PURCHASE_PRICE_MESSAGE = "구입금액을 입력해 주세요.";
    static #OUTPUT_PURCHASE_PRICE_MESSAGE = "개를 구매했습니다.";
    static #INPUT_WIN_NUMBER = "당첨 번호를 입력해 주세요.";
    static #INPUT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";
    static #OUTPUT_STATISTIC_TITLE = "당첨 통계 \n ---"
    
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

    static async getWinNumber(){
        let winNumber = await Console.readLineAsync(`${this.#INPUT_WIN_NUMBER}`);
        return winNumber.split(',').map((num) => parseInt(num));
    }

    static async getBonusNumber(){
        let bonusNumber = await Console.readLineAsync(`${this.#INPUT_BONUS_NUMBER}`);
        return bonusNumber;
    }
}

export default LottoManagerIO;
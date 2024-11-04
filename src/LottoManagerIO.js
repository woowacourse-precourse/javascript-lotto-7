import { Console } from "@woowacourse/mission-utils"
import { calculateLottoCount, calculateProfitRate } from "./lottoUtils.js";

class LottoManagerIO {
    static #INPUT_PURCHASE_PRICE_MESSAGE = "구입금액을 입력해 주세요.";
    static #OUTPUT_PURCHASE_PRICE_MESSAGE = "개를 구매했습니다.";
    static #INPUT_WIN_NUMBER = "당첨 번호를 입력해 주세요.";
    static #INPUT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";
    static #OUTPUT_STATISTIC_TITLE = "당첨 통계\n---"
    static #OUTPUT_STATISTIC_RESULT = {
        countIntoStatisticMessage : (lottoResult) => {
            return `3개 일치 (5,000원) - ${lottoResult.getMatchCount(3)}개\n` +
            `4개 일치 (50,000원) - ${lottoResult.getMatchCount(4)}개\n` +
            `5개 일치 (1,500,000원) - ${lottoResult.getMatchCount(5, false)}개\n` +
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.getMatchCount(5, true)}개\n` +
            `6개 일치 (2,000,000,000원) - ${lottoResult.getMatchCount(6)}개`
        }};
    static #OUTPUT_PROFIT_RATE_MESSAGE = "총 수익률은 {rate}%입니다.";

    static #validatePrice(price){
        if(price % 1000 != 0){
            throw new Error("[Error] 로또 구매 금액은 1000의 배수로 입력 가능합니다.");
        }
    }

    static async inputPurchasePrice(){
        let purchasePrice = await Console.readLineAsync(LottoManagerIO.#INPUT_PURCHASE_PRICE_MESSAGE);
        purchasePrice = parseInt(purchasePrice, 10);
        this.#validatePrice(purchasePrice);
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

    static async inputWinNumber(){
        let winNumber = await Console.readLineAsync(`${this.#INPUT_WIN_NUMBER}`);
        return winNumber.split(',').map((num) => Number(num.trim()));
    }

    static async inputBonusNumber(){
        let bonusNumber = await Console.readLineAsync(`${this.#INPUT_BONUS_NUMBER}`);
        return bonusNumber;
    }

    static printResultStatistic(lottoResult){
        Console.print(`${this.#OUTPUT_STATISTIC_TITLE}`);
        Console.print(this.#OUTPUT_STATISTIC_RESULT.countIntoStatisticMessage(lottoResult));
    } 

    static printProfitRate(principal, profit) {
        const rate = calculateProfitRate(principal, profit); 
        const message = this.#OUTPUT_PROFIT_RATE_MESSAGE.replace("{rate}", rate);
        Console.print(message);
    }
}

export default LottoManagerIO;
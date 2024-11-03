import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { BUYING_COST_REG_EXP, PLEASE_INPUT_RIGHT_COST } from "./constant.js";
class LotteryGenerator {
    #buyingAmount;
    #lottoList;

    constructor(buyingCost) {
        this.#buyingAmount = +this.filterBuyingCost(buyingCost);
        this.#lottoList = Array.from({ length: this.#buyingAmount });
        this.makeLottoList();
    }

    filterBuyingCost(string) {
        const filteredBuyingCost = string.match(BUYING_COST_REG_EXP);

        if (!filteredBuyingCost) throw new Error(PLEASE_INPUT_RIGHT_COST);

        return filteredBuyingCost[0];
    }

    makeLottoList() {
        this.#lottoList = this.#lottoList.map(() => this.makeLotto());
    }

    makeLotto() {
        const numberList = Random.pickUniqueNumbersInRange(1, 45, 6);

        try {
            return new Lotto(numberList).numbers;
        } catch (error) {
            return this.makeLotto();
        }
    }

    get buyingAmount() {
        return this.#buyingAmount;
    }

    get lottoList() {
        return this.#lottoList;
    }
}

export default LotteryGenerator;

import { Console } from "@woowacourse/mission-utils";

class Money {
    #money;

    constructor(money){
        this.#validate(money);
        this.#money = money;
    }

    #validate(money){
        if(Number.isNaN(money) ||money % 1000 != 0 || money <= 0){
            throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
        }
    }

    getMoney() {
        return this.#money;
    }
}

export default Money;
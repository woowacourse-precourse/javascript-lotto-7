import { errorMessage } from "../constant/errorMessage.js";

class Consumer{
    #price;

    constructor(price) {
        this.#validate(price);
        this.#price = price;
    }
    getPrice(){
        return this.#price;
    }
    buyLottoCount(){
        return this.#price / 1000;
    }
    #validate(price){
        if (price === 0){
            throw new Error(errorMessage.inputZeroCashValue);
        }
        if (price % 1000 !== 0){
            throw new Error(errorMessage.inputCashInvalidValue);
        }
    }
}

export default Consumer;
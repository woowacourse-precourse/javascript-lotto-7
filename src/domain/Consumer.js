import { inputCash } from "../utils/inputView.js";

class Consumer{
    #price;
    #lottoNumbers;

    constructor(price) {
        this.#price = price;
    }
    getPrice(){
        return this.#price;
    }
    buyLottoCount(){
        return this.#price / 1000;
    }
}

export default Consumer;
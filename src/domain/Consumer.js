import { inputCash } from "../utils/inputView.js";

class Consumer{
    #price;
    #lottoNumbers;

    getPrice(){
        return this.#price;
    }
    buyLotto(){
        return this.#price / 1000;
    }
}
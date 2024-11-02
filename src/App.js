import {InputHandler} from "./utils/InputHandler.js";
import {INSTRUCTION} from "./constants/constants.js";
import {purchasePriceUtils} from "./utils/purchasePrice.utils.js";

class App {
    async run() {
        const purchasePrice = await InputHandler.getInput(INSTRUCTION.GET_PURCHASE_PRICE, purchasePriceUtils.validate);
    }
}

export default App;
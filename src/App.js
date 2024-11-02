import {purchasePriceValidation} from "./validation/validationCheck.js";
import {InputHandler} from "./utils/InputHandler.js";
import {INSTRUCTION} from "./constants/constants.js";

class App {
    async run() {
        const purchasePrice = await InputHandler.getInput(INSTRUCTION.GET_PURCHASE_PRICE, purchasePriceValidation.isValidPurchasePrice);
    }
}

export default App;
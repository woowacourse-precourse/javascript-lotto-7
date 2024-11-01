import { INFO_MESSAGE } from "./libs/constants.js";
import { calculateAmount } from "./libs/helpers.js";
import { getInput } from "./libs/utils.js";
import { validateNumberType } from "./libs/validate.js";

class App {
  async run() {
    const amount = await getInput(INFO_MESSAGE.PURCHASE_AMOUNT);
    validateNumberType(amount);
    const calculatedAmount = calculateAmount(amount);
  }
}

export default App;

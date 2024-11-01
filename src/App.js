import { INFO_MESSAGE } from "./libs/constants.js";
import { getInput } from "./libs/utils.js";
import { validateNumberType } from "./libs/validate.js";

class App {
  async run() {
    const amount = await getInput(INFO_MESSAGE.PURCHASE_AMOUNT);
    validateNumberType(amount);
  }
}

export default App;

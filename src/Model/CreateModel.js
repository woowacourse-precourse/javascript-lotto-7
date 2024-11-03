import Purchase from "./Purchase.js";
import Lotto from "../Lotto.js";
import Bonus from "./Bonus.js";

class CreateModel {
    createPurchaseModel(amount) {
        return new Purchase(amount);
    }
    createLottoModel(winngNumbers) {
        return new Lotto(winngNumbers);
    }
    createBonusModel(bonusNumber, lottoWinngNumbers) {
        return new Bonus(bonusNumber, lottoWinngNumbers.getLotto());
    }
}
export default CreateModel;
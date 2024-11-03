import { randomNumber } from "./utils/randomNumber"

class LottoGameService{
    makeLottos(amount) {
        return Array.from({length: amount}, () => randomNumber.getUniqueRandomNumbers(1, 45, amount));
    }
}

export default LottoGameService
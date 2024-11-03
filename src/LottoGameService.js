import { random } from "./utils/random"

class LottoGameService{
    makeLottos(amount) {
        return Array.from({length: amount}, () => random.makeUniqueNumbers(1, 45, amount));
    }
}

export default LottoGameService
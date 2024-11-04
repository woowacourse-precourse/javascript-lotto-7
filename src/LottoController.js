import RandomNum from "./RandomNum.js";
import Lotto from "./Lotto.js";

export default class LottoController {

    static getUserLotto(lottoCount) {
        return Array.from({ length: lottoCount }, () => RandomNum.getNumber()); 
    }

    static createrWinningLottoNumbers(winningNumbers) {
        return new Lotto(winningNumbers);
    }
    
}

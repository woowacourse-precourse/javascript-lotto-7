import RandomNum from "./RandomNum.js";
import Parser from "./Parser.js";
import Lotto from "./Lotto.js";

export default class LottoController {

    static getUserLotto(lottoCount) {
        return Array.from({ length: lottoCount }, () => RandomNum.getNumber()); 
    }

    static createrWinningLottoNumbers(winningNumbers) {
        const winningNumbersList = Parser.separaterLottoNumber(winningNumbers);
        return new Lotto(winningNumbersList);
    }

}

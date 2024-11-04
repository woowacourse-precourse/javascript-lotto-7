import RandomNum from "./RandomNum.js";
import Parser from "./Parser.js";
import Lotto from "./Lotto.js";

export default class LottoController {

    static getUserLotto(lottoCount) {
        return Array.from({ length: lottoCount }, () => RandomNum.getNumber().sort((a,b) => a-b)); 
    }

    static createrWinningLotto(winningNumbers) {
        const winningLotto = Parser.separaterLottoNumber(winningNumbers);
        return new Lotto(winningLotto);
    }

    
}

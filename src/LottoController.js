import RandomNum from "./RandomNum.js";

export default class LottoController {

    static getUserLotto(lottoCount) {
        return Array.from({ length: lottoCount }, () => RandomNum.getNumber()); 
    }
}

import { Console, Random } from "@woowacourse/mission-utils"
import CheckNumber from "./CheckNumber.js";

class LottoGenerator{
    constructor(checkNumber){
            this.checkNumber = checkNumber;
        }
    generateLottos(lottoCount) {
        for (let i = 0; i < lottoCount; i++) {
            const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b)
            Console.print(lottoNumber)
            this.checkNumber.RandomLottoNumbers.push(lottoNumber)
        }
    }
}

export default LottoGenerator;
import { Console, Random } from "@woowacourse/mission-utils"

class LottoGenerator{
    constructor(checkNumber){
            this.checkNumber = checkNumber;
        }
    generateLottos(lottoCount) {
        for (let i = 0; i < lottoCount; i++) {
            const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b)
            const formattedNumber = `[${lottoNumber.join(', ')}]`; // 공백 포함한 형식으로 변환
            Console.print(formattedNumber);
            this.checkNumber.RandomLottoNumbers.push(lottoNumber)
        }
    }
}

export default LottoGenerator;
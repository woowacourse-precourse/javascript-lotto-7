import { Console, Random } from "@woowacourse/mission-utils";

class LottoGenerator {
    generateLottos(lottoCount) {
        this.printLottos(lottoCount);
    }

    printLottos(lottoCount) {
        for (let i = 0; i < lottoCount; i++) {
            const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            Console.print(lottoNumbers);
        }
    }
}


export default LottoGenerator;

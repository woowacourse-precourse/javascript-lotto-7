import { Console } from '@woowacourse/mission-utils';

export default class OutputUtils {
    static printNumberOfPurchase(number) {
        Console.print(`${number}개를 구매했습니다.`)
    }

    static printLottoNumbers(lottos){
        lottos.forEach(lotto => {
            Console.print(`${lotto.getNumbers()}`)
        })
    }

    static printErrorMessage(errorMessage) {
        Console.print(errorMessage)
    }
}
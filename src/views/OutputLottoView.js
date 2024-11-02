import { Console } from "@woowacourse/mission-utils";

export default class OutputLottoView{
    #OUTPUT_MESSAGE={
        NOTIFY_PURCHASED_LOTTO_COUNT : '개를 구매했습니다.',
    }

    printMessage(message){
        Console.print(message)
    }

    printPurchasedLottosInfo(lottoPurchaser){
        const lottoCount = lottoPurchaser.getLottoCount()
        const lottos = lottoPurchaser.getLottos()

        Console.print(`\n${lottoCount}${this.#OUTPUT_MESSAGE.NOTIFY_PURCHASED_LOTTO_COUNT}`)
        lottos.forEach((lotto)=>{
            Console.print(lotto.getNumbers())
        })
    }
}
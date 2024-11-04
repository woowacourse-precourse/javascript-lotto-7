import {Console} from "@woowacourse/mission-utils";
import {OUTPUT} from "../constants/messages.js";
import {objToValueArr} from "../utils/objectUtils.js";
import {MATCH_COUNTER} from "../constants/objects.js";

export const purchaseOutput = (purchasedLottos) => {
    const purchasesNum = purchasedLottos.length
    Console.print(purchasesNum + OUTPUT.PURCHASE)
    purchasedLottos.map((lotto) => Console.print(JSON.stringify(lotto).replaceAll(",", ", ")))
}

export const winningStatsOutput = (calculateYield) => {
    Console.print("당첨통계")
    Console.print("---")
    objToValueArr(MATCH_COUNTER).map((MATCH_COND) => {
        Console.print(MATCH_COND.OUTPUT_CONTENT + MATCH_COND.cnt + "개")
    })
    Console.print(`총 수익률은 ${calculateYield}%입니다.`)
}

export const errorOutput = (message) => {
    Console.print(message)
}
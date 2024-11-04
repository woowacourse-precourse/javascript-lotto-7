import {Console} from "@woowacourse/mission-utils";
import {MATCH_COUNTER, OUTPUT_OBJ} from "../constants/objects.js";
import {OUTPUT} from "../constants/message.js";
import {toObjectValueArr} from "../utils/objectUtils.js";

export const input = async (message) => {
    return await Console.readLineAsync(message)
}

export const purchaseOutput = (purchasedLottos) => {
    const purchasesNum = purchasedLottos.length
    Console.print(purchasesNum + OUTPUT.PURCHASE)
    purchasedLottos.map((lotto) => Console.print("[" + lotto + "]"))
}

export const winningStatsOutput = (calculateYield) => {
    Console.print(`당첨통계\n---`)
    toObjectValueArr(MATCH_COUNTER).map((elem, idx) => {
        Console.print(OUTPUT_OBJ[idx].content + elem.cnt + "개")
    })
    Console.print(`총 수익률은 ${calculateYield}%입니다.`)
}

export const errorOutput = (message) => {
    Console.print(message)
}
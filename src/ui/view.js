import {Console} from "@woowacourse/mission-utils";
import {OUTPUT_OBJ} from "../constants/objects.js";
import {OUTPUT} from "../constants/message.js";

export const input = async (message) => {
    return await Console.readLineAsync(message)
}

export const purchaseOutput = (purchasedLottos) => {
    const purchasesNum = purchasedLottos.length
    Console.print(purchasesNum + OUTPUT.PURCHASE)
    purchasedLottos.map((lotto) => Console.print("[" + lotto + "]"))
}

export const winningStatsOutput = (resultObj) => {
    Console.print(`당첨통계\n---`)
    Object.values(resultObj).map((elem, idx) => {
        Console.print(OUTPUT_OBJ[idx].content + elem + "개")
    })
}
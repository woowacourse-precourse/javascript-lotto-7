import { Console, MissionUtils } from "@woowacourse/mission-utils";

export function calculateLottoCount(INPUT_PURCHASE_PRICE){
    return INPUT_PURCHASE_PRICE/1000
}

export function generateRandomNumbers(){
    let randomNumberList = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumberList.sort((a, b)=> a - b);
    return randomNumberList;
}

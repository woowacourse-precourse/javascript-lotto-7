// 구매 금액과 관련있는 함수들

import { Console } from "@woowacourse/mission-utils";

function inputPrice(){
    const PRICE = Console.readLineAsync();
}

function isDivided1000(PRICE){
    const DividedPrice = PRICE / 1000;
    if(DividedPrice === Math.floor(DividedPrice)){
        return true;
    }
    return false;
}

export {inputPrice};
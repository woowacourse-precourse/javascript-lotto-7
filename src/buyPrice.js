// 구매 금액과 관련있는 함수들

import { Console } from "@woowacourse/mission-utils";

function inputPrice(){
    const PRICE = Console.readLineAsync();
}

function isNumber(PRICE){
    return /^[0-9]+$/.test(PRICE);
}

function isDivided1000(PRICE){
    const DividedPrice = PRICE / 1000;
    if(DividedPrice === Math.floor(DividedPrice)){
        return true;
    }
    
    throw new Error("[ERROR] : 1000으로 나누어 떨어지지 않습니다.");
}

export {inputPrice};
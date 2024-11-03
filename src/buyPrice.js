// 구매 금액과 관련있는 함수들

import { Console } from "@woowacourse/mission-utils";

function inputPrice(){
    const PRICE = Console.readLineAsync();
}

function isPositiveNumber(PRICE){
    if(!/^[0-9]+$/.test(PRICE) || parseInt(PRICE) === 0){
        throw new Error("[ERROR] 구매 금액이 양수가 아닙니다.")
    }
}

function isDivided1000(PRICE){
    const DividedPrice = parseInt(PRICE) / 1000;
    if(DividedPrice !== Math.floor(DividedPrice)){
        throw new Error("[ERROR] 1000으로 나누어 떨어지지 않습니다.");
    }
}

export {inputPrice, isPositiveNumber, isDivided1000};
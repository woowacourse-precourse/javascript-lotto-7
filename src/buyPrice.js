// 구매 금액과 관련있는 함수들

import { Console } from "@woowacourse/mission-utils";

async function getLottoCnt(){
    const PRICE = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    Console.print("");
    isNumber(PRICE);
    isZero(PRICE);
    isIntNumber(PRICE);
    isDivided1000(PRICE);
    return calcLottoCnt(PRICE);
}

function calcLottoCnt(PRICE){
    const PRICENUMBER = parseInt(PRICE);
    const result = PRICENUMBER / 1000;
    return result;
}

function isIntNumber(PRICE){
    const number = parseInt(PRICE);
    if(!Number.isSafeInteger(number)){
        throw new Error("[ERROR] 정수 범위를 벗어났습니다.");
    }
}

function isNumber(PRICE){
    if(!/^[0-9]+$/.test(PRICE)){
        throw new Error("[ERROR] 숫자가 아닙니다.")
    }
}

function isZero(PRICE){
    if(parseInt(PRICE) === 0){
        throw new Error("[ERROR] 0 값이 들어왔습니다.")
    }
}

function isDivided1000(PRICE){
    const DividedPrice = parseInt(PRICE) / 1000;
    if(DividedPrice !== Math.floor(DividedPrice)){
        throw new Error("[ERROR] 1000으로 나누어 떨어지지 않습니다.");
    }
}

export {getLottoCnt, isDivided1000, isIntNumber, calcLottoCnt, isZero, isNumber};
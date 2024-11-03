// 담청 번호, 보너스 번호와 관련 있는 함수들

import { Console } from "@woowacourse/mission-utils";

async function inputWinningNumbers(){
    const WINNING_NUMBERS = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
}

function isPositiveNumber(number){
    if(!/^[0-9]+$/.test(number) || parseInt(number) === 0){
        throw new Error("[ERROR] 양수인 당첨 번호를 입력하세요.");
    }
}

function is1to45(number){
    if(parseInt(number) < 1 || parseInt(number) > 45){
        throw new Error("[ERROR] 값이 1이상 45이하인지 확인하세요.");
    }
}

function isLength6(numberList){
    if(!numberList.length !== 6){
        throw new Error("[ERROR] 당첨 번호가 6개인지 확인하세요.");
    }
}

export {isPositiveNumber, is1to45, isLength6}
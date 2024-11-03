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

export {isPositiveNumber}
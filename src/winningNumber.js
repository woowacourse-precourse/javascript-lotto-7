// 담청 번호, 보너스 번호와 관련 있는 함수들

import { Console } from "@woowacourse/mission-utils";

async function getBonusNumer(winningNumbers){
    const BONUS_NUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    Console.print("");
    isWinningNumber(parseInt(BONUS_NUMBER), winningNumbers);

    return parseInt(BONUS_NUMBER);
}

function isWinningNumber(BONUS_NUMBER, winningNumbers){
    if(winningNumbers.includes(BONUS_NUMBER)){
        throw new Error("[ERROR] 당첨 번호에 이미 존재하는 숫자입니다.")
    }
}

async function getWinningNumbers(){
    const WINNING_NUMBERS = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    Console.print("");
    const winningList = WINNING_NUMBERS.split(",");

    isLength6(winningList);
    isDuplicated(winningList);
    winningList.forEach((number)=>{
        isPositiveNumber(number);
        is1to45(winningList);
    })

    return string2Number(winningList);
}

function string2Number(numberList){
    return numberList.map((number)=> parseInt(number)); 
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
    if(numberList.length !== 6){
        throw new Error("[ERROR] 당첨 번호가 6개인지 확인하세요.");
    }
}

function isDuplicated(numberList){
    const numberSet = new Set(numberList);
    if(numberSet.size !== 6){
        throw new Error("[ERROR] 중복된 당첨 번호가 있는지 확인하세요.")
    }
}

export {isPositiveNumber, is1to45, isLength6, isDuplicated, getWinningNumbers, getBonusNumer}
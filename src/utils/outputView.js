import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../constant/Message.js";
import { BOARD } from "../constant/boardMessage.js";

export function printGuideBuyLotto(someLotto){
    return Console.print(someLotto + PRINT_MESSAGE.BUY_LOTTO);
}

export function printLottoDetail(lottoArr){
    return Console.print(`${lottoArr}`);
}

export function printAllLotto(lottoArr){
    for (let i = 0; i < lottoArr.length; i++){
        printLottoDetail();
    }
}

export function printWinningBoard(sames){
    Console.print(PRINT_MESSAGE.WINNING_STATICS);
    Console.print(PRINT_MESSAGE.SWITCH_LINE_DASH);
    allNotificationRanking(sames);
}

function notificationRanking(number, cash ,same){
    Console.print(`${number}개 일치 (${cash}) - ${same}개`);
}

function allNotificationRanking(same){
    notificationRanking(BOARD.FIFTH_WINNING_NUMBER, BOARD.FIFTH_WINNING_CASH, same);
    notificationRanking(BOARD.FOURTH_WINNING_NUMBER, BOARD.FOURTH_WINNING_CASH, same);
    notificationRanking(BOARD.THIRD_WINNING_NUMBER, BOARD.THIRD_WINNING_CASH, same);
    notificationRanking(BOARD.SECOND_WINNING_NUMBER, BOARD.SECOND_WINNING_CASH, same);
    notificationRanking(BOARD.FIRST_WINNING_NUMBER, BOARD.FIRST_WINNING_CASH, same);
}

export function printRateOfReturn(rate){
    return Console.print(`총 수익률은 ${rate}% 입니다.`);
}
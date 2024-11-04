import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Message.js";

export function inputCash(){
    return Console.readLineAsync(INPUT_MESSAGE.CASH + '\n');
}

export function inputWinningNumbers(){
    return Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS + '\n');
}

export function inputBonusNumbers(){
    return Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER + '\n');
}
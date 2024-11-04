import { Console } from "@woowacourse/mission-utils";

/**
 * 사용자에게 출력값 및 메세지를 보여주기 위한 js
 */
export const OutputView = {

    outputPrint(outputMessage) {
        Console.print(outputMessage);
    },

    outputEmptyPrintLine() {
        Console.print('');
    },
}
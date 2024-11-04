import { Console } from "@woowacourse/mission-utils" 

/**
 * 사용자 입력을 위한 js
 */
export const InputView = {

    async inputReadLine(inputMessage) {
        return await Console.readLineAsync(inputMessage);
    },
}
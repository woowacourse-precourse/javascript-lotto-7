import {Console} from "@woowacourse/mission-utils";

export const userInput = async (content) => {
    return Console.readLineAsync(content);
}
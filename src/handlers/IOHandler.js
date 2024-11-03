import { MissionUtils } from '@woowacourse/mission-utils.js';

export const getInput = async (inputMessage) => {
    const input = await MissionUtils.Console.readLineAsync(inputMessage);
    return input;
}

export const printOutput = (output) => {
    MissionUtils.Console.print(output);
}
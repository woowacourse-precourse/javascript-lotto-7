import { MissionUtils } from "@woowacourse/mission-utils";
//사용자 입출력 처리 모듈
class ConsoleHandler {
    static async readLineAsync(prompt) {
        return await MissionUtils.Console.readLineAsync(prompt);
    }

    static print(message) {
        MissionUtils.Console.print(message);
    }
}

export default ConsoleHandler;
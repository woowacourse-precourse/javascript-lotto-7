import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
    print(...message) {
        MissionUtils.Console.print(message.join(' '));
    }
}

export default Output;

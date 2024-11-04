import { MissionUtils } from '@woowacourse/mission-utils';

export default function print(...message) {
    MissionUtils.Console.print(message.join(' '));
}

import { MissionUtils } from '@woowacourse/mission-utils';

const getLottos = (amount) => {
    let lottos = [];
    for (let i = 0; i < amount; i++) {
        lottos.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return lottos;
}

export default getLottos;
import {MissionUtils} from '@woowacourse/mission-utils'

const makeUniqueNumbers = (minNumber, maxNumber, amount) => {
    return MissionUtils.Random.pickUniqueNumbersInRange(minNumber, maxNumber, amount);
};


export const random = {
    makeUniqueNumbers,
};

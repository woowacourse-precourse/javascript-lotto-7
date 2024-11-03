import {MissionUtils} from '@woowacourse/mission-utils'

const getUniqueRandomNumbers = (minNumber, maxNumber, amount) => {
    return MissionUtils.Random.pickUniqueNumbersInRange(minNumber, maxNumber, amount);
};

const getRandomNumber = (minNumber, maxNumber) => {
    return MissionUtils.Random.pickNumberInRange(minNumber, maxNumber);
};

export const randomNumber = {
    getRandomNumber,
    getUniqueRandomNumbers,
};

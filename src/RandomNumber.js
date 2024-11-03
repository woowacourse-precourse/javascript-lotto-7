import { Random } from "@woowacourse/mission-utils";

const generateRandomNumbers = () => {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
}

export default generateRandomNumbers;
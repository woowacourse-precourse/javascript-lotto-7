import { Random } from "@woowacourse/mission-utils";

export const picknumber = (min, max, num) => {
    const number = Random.pickUniqueNumbersInRange(min, max, num);

    return number;
}
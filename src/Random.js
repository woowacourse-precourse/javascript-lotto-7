import { Random } from "@woowacourse/mission-utils";

export const picknumber = (min, max, num) => {
    const number = Random.pickUniqueNumbersInRange(min, max, num);

    console.log(number);

    return number;
}
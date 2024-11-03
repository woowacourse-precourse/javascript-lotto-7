import { Random } from "@woowacourse/mission-utils";

export const buyOneLotto = () => Random.pickUniqueNumbersInRange(1, 45, 6);

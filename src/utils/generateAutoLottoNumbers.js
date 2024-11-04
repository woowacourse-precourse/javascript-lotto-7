import { Random } from "@woowacourse/mission-utils";

export const generateAutoLottoNumbers = (
    minNumber, 
    maxNumber, 
    lottoNumberCount
) => {
    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, lottoNumberCount);
}
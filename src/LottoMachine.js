import { MissionUtils } from "@woowacourse/mission-utils";

export const createLottoNumbers = () => {
    let numberSet = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return [...numberSet].sort((a, b) => a - b);
}

export const offerLottoSheet = (quantity) => {
    let sheet = [];

    for(let i=0; i<quantity; i++){
        sheet.push(createLottoNumbers());
    }

    return sheet;
}
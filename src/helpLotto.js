import { MissionUtils, Console } from '@woowacourse/mission-utils';

export function calculateLottoAmount(money) {
    return Math.floor(money / 1000);
}

export function drawLottoNumbers(amount) {
    for (let i = 0; i < amount; i++) {
        const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
            1,
            45,
            6
        );
        const SORTED_LOTTO = LOTTO_NUMBER.sort((a, b) => a - b);
        Console.print(SORTED_LOTTO);
    }
}

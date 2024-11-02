import { MissionUtils } from "@woowacourse/mission-utils";
import PurchaseAmount from "../PurchaseAmount";
import Lotto from "../Lotto";

export async function promptPurchaseAmount() {
    const INPUT_AMOUNT = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return new PurchaseAmount(INPUT_AMOUNT);
}

export async function generateLottos(totalLotto, allLotto) {
    for (let i = 0; i < totalLotto; i++) {
        const numbers = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        numbers.sort((a, b) => a - b);
        const lotto = new Lotto(numbers);
        await allLotto.addInputLotto(lotto);
    }
}

export async function promptWinningNumbers() {
    const inputWinningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');

    validateWinningNumbers(inputWinningNumbers);

    return inputWinningNumbers.split(',').map(Number);
}

export function validateWinningNumbers(inputWinningNumbers) {
    const numbers = inputWinningNumbers.split(',');

    if (!inputWinningNumbers.includes(',')) {
        console.log('[ERROR] 숫자를 쉼표 구분자로 구분해서 입력해야 합니다.');
        return;
    }

    if (numbers.length !== 6) {
        console.log('[ERROR] 당첨 번호는 6자리로 입력해야 합니다.');
        return;
    }

    numbers.forEach((val) => {
        if (isNaN(val)) {
            console.log('[ERROR] 숫자를 입력해야 합니다.');
        }
        if (Number(val) < 1 || Number(val) > 45) {
            console.log('[ERROR] 숫자는 1과 45 사이의 숫자만 입력해야 합니다.');
        }
    });

    if (new Set(numbers).size !== numbers.length) {
        console.log('[ERROR] 중복된 숫자가 존재해서는 안됩니다.');
    }
}

export async function promptBonusNumber() {
    return Number(await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));
}

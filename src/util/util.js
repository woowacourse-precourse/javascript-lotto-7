import { MissionUtils } from "@woowacourse/mission-utils";
import PurchaseAmount from "../PurchaseAmount.js";
import Lotto from "../Lotto.js";

const errorMessages = {
    invalidDelimiter: '[ERROR] 숫자를 쉼표 구분자로 구분해서 입력해야 합니다.',
    incorrectLength: '[ERROR] 당첨 번호는 6자리로 입력해야 합니다.',
    notANumber: '[ERROR] 숫자를 입력해야 합니다.',
    outOfRange: '[ERROR] 숫자는 1과 45 사이의 숫자만 입력해야 합니다.',
    duplicateNumbers: '[ERROR] 중복된 숫자가 존재해서는 안됩니다.',
};


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

    if (!validateWinningNumbers(inputWinningNumbers)) {
        return -1;
    }

    return inputWinningNumbers.split(',').map(Number);
}

function validateDelimiter(inputWinningNumbers) {
    if (!inputWinningNumbers.includes(',')) {
        MissionUtils.Console.print(errorMessages.invalidDelimiter);
        return false;
    }
    return true;
}

function validateLength(numbers) {
    if (numbers.length !== 6) {
        MissionUtils.Console.print(errorMessages.incorrectLength);
        return false;
    }
    return true;
}

function validateNumbers(numbers) {
    for (let val of numbers) {
        const numVal = Number(val);
        if (isNaN(numVal)) {
            MissionUtils.Console.print(errorMessages.notANumber);
            return false;
        }
        if (numVal < 1 || numVal > 45) {
            MissionUtils.Console.print(errorMessages.outOfRange);
            return false;
        }
    }
    return true;
}

function validateDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
        MissionUtils.Console.print(errorMessages.duplicateNumbers);
        return false;
    }
    return true;
}

export function validateWinningNumbers(inputWinningNumbers) {
    const numbers = inputWinningNumbers.split(',');

    return (
        validateDelimiter(inputWinningNumbers) &&
        validateLength(numbers) &&
        validateNumbers(numbers) &&
        validateDuplicates(numbers)
    );
}

export async function promptBonusNumber() {
    return Number(await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));
}

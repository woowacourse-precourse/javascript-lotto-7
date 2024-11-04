import { isEmpty, isMinusNumber, isNotNumber, isEndWith1000 } from "../validateInput/validateInputMoney.js";
import { isWinEmpty, isWinMinusNumber, isWinNotNumber, isWinOutOfRange } from "../validateInput/validateInputWinNumber.js";
import { BonusNumberOutput, BuyMoneyOutput, WinInputOutput, WinNumberOutput } from "../woowahanOutput.js";

const buyMoneyValidator = (input) => {
    const output = new BuyMoneyOutput();

    const conditions = [
        { check: () => isEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => !isEndWith1000(input), action: () => output.printEndWith1000() }
    ];

    for (const condition of conditions) {
        if (condition.check()) {
            condition.action();
            return false;
        }
    }

    return true;
};

const winInputValidator = (input) => {
    const output = new WinInputOutput();

    if (input.length !== 6) {
        output.printCountNotSix();
        return false
    }
    return true
}

const winNumberValidator = (input) => {
    const output = new WinNumberOutput();

    const conditions = [
        { check: () => isWinEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isWinNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isWinMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => isWinOutOfRange(input), action: () => output.printOutOfRange() }
    ];

    for (const condition of conditions) {
        if (condition.check()) {
            condition.action();
            return false;
        }
    }

    return true;
};

const bonusNumberValidator = (input) => {
    const output = new BonusNumberOutput();

    const conditions = [
        { check: () => isWinEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isWinNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isWinMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => isWinOutOfRange(input), action: () => output.printOutOfRange() }
    ];

    for (const condition of conditions) {
        if (condition.check()) {
            condition.action();
            return false;
        }
    }

    return true;
};

export { buyMoneyValidator, winNumberValidator, winInputValidator, bonusNumberValidator };
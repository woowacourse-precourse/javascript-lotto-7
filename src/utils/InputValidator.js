import {LOTTO_NUMBER_COUNT, LOTTO_PRICE, MAX_NUMBER, MIN_NUMBER} from "../constants/gameConstants.js";

export class InputValidator {
    static validatePurchaseAmount(input) {
        const amount = Number(input);

        if (input.trim() === '') {
            throw new Error("[ERROR] 구매 금액을 입력해주세요.");
        }

        if (/[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]/.test(input)) {
            throw new Error("[ERROR] 구매 금액은 숫자만 입력 가능합니다.");
        }

        if (input.includes('.')) {
            throw new Error("[ERROR] 구매 금액은 정수만 입력 가능합니다.");
        }

        if (input.startsWith('0x') || input.startsWith('0b')) {
            throw new Error("[ERROR] 구매 금액은 10진수 형태로만 입력 가능합니다.");
        }

        if (input.includes('e') || input.includes('E')) {
            throw new Error("[ERROR] 구매 금액은 일반 숫자 형태로만 입력 가능합니다.");
        }

        if (!/^\d+$/.test(input)) {
            throw new Error("[ERROR] 구매 금액은 숫자만 입력 가능합니다.");
        }

        if (!Number.isInteger(amount)) {
            throw new Error("[ERROR] 올바른 구매 금액을 입력해주세요.");
        }

        if (amount <= 0) {
            throw new Error("[ERROR] 구매 금액은 0보다 커야 합니다.");
        }

        if (amount % LOTTO_PRICE !== 0) {
            throw new Error("[ERROR] 구매 금액은 1,000원 단위여야 합니다.");
        }
    }

    static validateWinningNumbers(input) {

        if (input.trim() === '') {
            throw new Error("[ERROR] 당첨 번호를 입력해주세요.");
        }

        if (!input.includes(',')) {
            throw new Error("[ERROR] 당첨 번호는 쉼표(,)로 구분되어야 합니다.");
        }

        if (input.includes(',,')) {
            throw new Error("[ERROR] 연속된 쉼표는 사용할 수 없습니다.");
        }

        const numbers = input.split(',');

        if (numbers.length !== LOTTO_NUMBER_COUNT) {
            throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }

        const parsedNumbers = numbers.map(num => {
            const trimmedNum = num.trim();

            if (trimmedNum === '') {
                throw new Error("[ERROR] 빈 값은 입력할 수 없습니다.");
            }

            if (num !== num.trim()) {
                throw new Error("[ERROR] 숫자 앞뒤에 공백이 포함될 수 없습니다.");
            }

            if (trimmedNum.startsWith('0x') || trimmedNum.startsWith('0b')) {
                throw new Error("[ERROR] 당첨 번호는 10진수 형태로만 입력 가능합니다.");
            }

            if (trimmedNum.includes('.')) {
                throw new Error("[ERROR] 당첨 번호는 정수만 입력 가능합니다.");
            }

            if (trimmedNum.includes('e') || trimmedNum.includes('E')) {
                throw new Error("[ERROR] 당첨 번호는 일반 숫자 형태로만 입력 가능합니다.");
            }

            if (!/^\d+$/.test(trimmedNum)) {
                throw new Error("[ERROR] 당첨 번호는 숫자만 입력 가능합니다.");
            }

            const number = Number(trimmedNum);

            if (number === 0) {
                throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
            }

            if (number < MIN_NUMBER || number > MAX_NUMBER) {
                throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
            }

            return number;
        });

        if (new Set(parsedNumbers).size !== LOTTO_NUMBER_COUNT) {
            throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
        }

        return parsedNumbers;
    }

    static validateBonusNumber(input, winningNumbers) {

        if (input.trim() === '') {
            throw new Error("[ERROR] 보너스 번호를 입력해주세요.");
        }

        if (input !== input.trim()) {
            throw new Error("[ERROR] 보너스 번호에 공백이 포함될 수 없습니다.");
        }

        if (input.startsWith('0x') || input.startsWith('0b')) {
            throw new Error("[ERROR] 보너스 번호는 10진수 형태로만 입력 가능합니다.");
        }

        if (input.includes('.')) {
            throw new Error("[ERROR] 보너스 번호는 정수만 입력 가능합니다.");
        }

        if (input.includes('e') || input.includes('E')) {
            throw new Error("[ERROR] 보너스 번호는 일반 숫자 형태로만 입력 가능합니다.");
        }

        if (!/^\d+$/.test(input)) {
            throw new Error("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
        }

        const number = Number(input);

        if (number === 0) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }

        if (number < MIN_NUMBER || number > MAX_NUMBER) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }

        if (winningNumbers.includes(number)) {
            throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
        }

        return number;
    }
}

export default InputValidator;
class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }
        this.validateDuplicate(numbers);
    }

    // TODO: 추가 기능 구현
    // 로또 번호가 1부터 45 사이의 숫자가 아닌 경우
    validateRange() {
        for (let i = 0; i < 6; i++) {
            if (this.#numbers[i] < 1 || this.#numbers[i] > 45) {
            }
        }
    }

    // 중복되는 숫자가 있는 경우
    validateDuplicate(numbers) {
        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size !== numbers.length) {
            throw new Error('[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.');
        }
    }

    // 정수형으로 변환
    #changeToInt() {
        this.#numbers = this.#numbers.map((num) => parseInt(num, 10));
    }

    getNumbers() {
        this.#changeToInt(this.#numbers);
        return this.#numbers;
    }
}

export default Lotto;

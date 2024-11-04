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
    }

    // TODO: 추가 기능 구현
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

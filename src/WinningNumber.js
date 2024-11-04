class WinningNumber {
    #winningNumbers;

    constructor(input) {
        this.#winningNumbers = this.#processWinningNumbers(input);
    }

    // 쉼표를 기준으로 구분하고 숫자 배열로 변환 후 유효성 검사
    #processWinningNumbers(input) {
        const numberArray = input.split(',').map(num => Number(num.trim()));
        this.#validate(numberArray);
        this.#winningNumbers = numberArray;
    }

    // 유효성 검사
    #validate(numbers) {
        validateTicketSize(numbers); // 번호 개수
        validateNumberRange(numbers); // 번호 범위
        validateUniqueNumbers(numbers); // 중복 여부
    }

    // 유효한 당첨 번호 배열 반환
    getWinningNumbers() {
        return [...this.#winningNumbers];
    }
}

export default WinningNumber;
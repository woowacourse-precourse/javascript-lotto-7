export default class Parser {
    static separaterLottoNumber(winningNumbers) {
        return winningNumbers.split(',').map(number => number.trim());
    }
}
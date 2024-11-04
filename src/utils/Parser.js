export default class Parser {
    static separaterLottoNumber(winningNumbers) {
        return winningNumbers.split(',').map(number => parseInt(number.trim()));
    }
}
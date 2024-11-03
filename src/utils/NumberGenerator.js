import {LOTTO_NUMBER_COUNT, MAX_NUMBER, MIN_NUMBER} from "../constants/gameConstants.js";

class NumberGenerator {
    static generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < LOTTO_NUMBER_COUNT) {
            numbers.add(Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER);
        }
        return Array.from(numbers).sort((a,b) => a - b);
    }
}
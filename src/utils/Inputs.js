import { Console } from '@woowacourse/mission-utils';
import { message_input_money,
    message_input_winning_number,
    message_input_bonus_number, 
    input_error_unique} from '../constants/Messages';
import { make_random_number_constant } from '../constants/CalculateNumbers';
import { input_error_length_not_6,
    input_error_typeof,
    input_error_spacebar,
    input_error_money_range,
    input_error_number_range } from '../constants/Messages';

class Inputs {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        this.#check_count_input(numbers);
        this.#check_typeof_input(numbers);
        this.#check_spacebar(numbers);
        this.#check_input_money_range(numbers);
        this.#check_input_number_range(numbers);
        this.#check_input_unique(numbers);
    }

    #check_count_input(numbers) {
        if (numbers.length !== make_random_number_constant) {
            throw new Error(input_error_length_not_6);
        }
    }

    #check_typeof_input(numbers) {
        if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
            throw new Error(input_error_typeof);
        }
    }

    #check_spacebar(numbers) {
        if (numbers.some(num => num.toString().includes(' '))) {
            throw new Error(input_error_spacebar);
        }
    }

    #check_input_money_range(numbers) {
        if (numbers.some(num => num % 1000 !== 0)) {
            throw new Error(input_error_money_range);
        }
    }

    #check_input_number_range(numbers){
        if(numbers.some(num => num > 46 || num < 1)){
            throw new Error(input_error_number_range)
        }
    }

    #check_input_unique(numbers){
        const is_unique = new Set(numbers);
        if(is_unique.size!==numbers.length){
            throw new Error(input_error_unique)
        }
    }

    async input_money() {
        Console.print(message_input_money);
        const data = await Console.readLineAsync();
        return parseInt(data); // parseInt 형태 data
    }

    async input_winning_number() {
        Console.print(message_input_winning_number);
        const data = await Console.readLineAsync();
        return data.split(',').map(Number); // list 형태의 data
    }

    async input_bonus_number() {
        Console.print(message_input_bonus_number);
        const data = await Console.readLineAsync();
        return parseInt(data);
    }
}

export default Inputs;
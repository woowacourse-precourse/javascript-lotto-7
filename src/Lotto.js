import { random_number_count } from "./constants/RandomNumbers";
import { input_error_unique} from '../constants/Messages';
import { make_random_number_constant } from '../constants/CalculateNumbers';
import { input_error_length_not_6,
    input_error_unique,
    input_error_number_range } from '../constants/Messages';


class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#check_count_input(numbers);
    this.#check_input_unique(numbers);
    this.#check_input_number_range(numbers);
  }

  // TODO: 추가 기능 구현
  #check_count_input(numbers) {
    if(!Array.isArray(numbers)){
        throw new Error('[ERROR] 입력값은 배열이어야함')
    }
    if (numbers.length !== make_random_number_constant) {
        throw new Error(input_error_length_not_6);
    }
  }
  #check_input_unique(numbers){
    const is_unique = new Set(numbers);
    if(is_unique.size!==numbers.length){
        throw new Error(input_error_unique)
    }
  }
  #check_input_number_range(numbers){
    if(numbers.some(num => num > 46 || num < 1)){
        throw new Error(input_error_number_range)
    }
  }
}

export default Lotto;
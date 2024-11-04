import { Console } from '@woowacourse/mission-utils';
import { message_input_money,
    message_input_winning_number,
    message_input_bonus_number } from '../constants/Messages';
    
class Inputs {
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
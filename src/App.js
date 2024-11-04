import Inputs from "./utils/Inputs";
import Prints from "./utils/Prints";
import Calculate from "./utils/Calculate";
// import Random from "./utils/Random";

import match_results from './constants/MatchResult';

class App {
  async run() {
    const input_function = new Inputs();
    const calculate_function = new Calculate();
    const print_function = new Prints();

    const money=input_function.input_money();
    const lotto_count=calculate_function.buy_lotto(money);
    const buy_lotto_list=RandomNumber.make_random_number(lotto_count);
    const winning_number=input_function.input_winning_number();
    const bonus_number=input_function.input_bonus_number();
    const match_count=calculate_function.match_lotto(buy_lotto_list,winning_number,bonus_number);
    const final_result=print_function.print_winning_result(match_count);
    const total_prize=calculate_function.total_prize(match_count,match_results);
    const total_rate=calculate_function.total_rate(money,total_prize)
    Console.print(`총 수익률은 ${total_rate}입니다`);
  }
}

export default App;

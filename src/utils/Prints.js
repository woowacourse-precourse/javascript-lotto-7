import { Console } from '@woowacourse/mission-utils';
import match_results from '../constants/MatchResult';

class Prints{
    buy_print(number,random_list){
        Console.print(`${number}개를 구매했습니다.`);
        for (let i = 0; i<this.length(random_list);i++){
            Console.print(random_list[i])
        };
    }

    winning_history(winning_list){
        Console.print('당첨 통계');
        Console.print('---');
        Console.print(winning_list);
    }

    print_winning_result(result_counts){
        match_results.forEach(result=>{
            const count=result_counts[result.print];
            if( count > 0 ){
                Console.print(result.print,count)
            }
        })
    }

    rate_of_return(percent){
        Console.print(`총 수익률은 ${percent}%입니다.`)
    }
}

export default Prints;
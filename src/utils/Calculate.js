import { Console } from '@woowacourse/mission-utils';
import { buy_lotto_constant,match_lotto_number } from "../constants/CalculateNumbers";
import match_results from '../constants/MatchResult'

class Calculate{
    buy_lotto(money){
        let count_lotto=0
        while (money >= buy_lotto_constant){
            number_of_lotto+=1
            money-=buy_lotto_constant
        }
        return count_lotto
    }

    match_lotto(lotto_list,winnig_number,bonus_number){
        const match_number=[...winnig_number, bonus_number];
        const result_list=[];
        const bonus_list=[];
        for (let lotto of lotto_list){
            const matchs=lotto.filter(num=>match_number.includes(num)).length;
            let bonus=false;
            if(matchs>=match_lotto_number && lotto.includes(bonus_number)){
                bonus=true;
            }
            result_list.push(matchs);
            bonus_list.push(bonus);
        }
        return [result_list, bonus_list] 
    }

    lotto_total_prize(result_list, bonus_list, match_results) {
        const matchCount = match_results.reduce((acc, result) => {
            acc[result.print] = 0;
            return acc;
        }, {});
        for (let i = 0; i < result_list.length; i++) {
            const match_count = result_list[i];
            const has_bonus = bonus_list[i];
            const results = match_results.find(result =>
                result.count === match_count && (!has_bonus || result.print.includes('보너스'))
            );
            if (results) { matchCount[results.print]++; }
        }
        return matchCount;
    }

    total_prize(matchCount, match_results){
        let prize=0;
        match_results.forEach(result => {
            const count=matchCount[result.print];
            if(count>0){
                prize+=count*result.prize;
            }
        });
        return prize;
    }

    total_rate(money,total_prize){
        const profit=total_prize-money;
        const rate=(profit/money)*100
        return rate
    }
}

export default Calculate;
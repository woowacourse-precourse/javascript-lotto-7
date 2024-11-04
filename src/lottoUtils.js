import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MATCHCOUNT, MATCHCOUNT_BONUS_CONDITION, UNRANK } from "./constants/rank.js";

export function calculateLottoCount(INPUT_PURCHASE_PRICE){
    return INPUT_PURCHASE_PRICE/1000
}

export function generateRandomNumbers(){
    let randomNumberList = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumberList.sort((a, b)=> a - b);
    return randomNumberList;
}

export function countMatchingNumbers(lottoNumbers, winNumbers){
    return lottoNumbers.filter(number => winNumbers.includes(number)).length;
}

export function isMatchBonusNumber(lottoNumbers, winBonusNumber){
    return lottoNumbers.includes(parseInt(winBonusNumber));
}

export function rankResult(matchCount, isMatchBonus){
    if (matchCount == 5){
        if(isMatchBonus){
            return MATCHCOUNT_BONUS_CONDITION.withBonus
        }
        else{
            return MATCHCOUNT_BONUS_CONDITION.withoutBonus
        }
    }  
    switch(matchCount){
        case 3 : 
            return MATCHCOUNT[3];
        case 4: 
            return MATCHCOUNT[4];
        case 6: 
            return MATCHCOUNT[6];
        default:
            return UNRANK;
    }
}

export function calculateProfitRate(principal, profit){
    return (profit / principal) * 100
} 
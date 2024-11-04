import { RANKING_MAP } from "../constants/constants.js";

function getRanking(winnings,difference,bonusNum){//차집합
    if ((difference.length === 1) && difference[0]===bonusNum){
        console.log(difference[0])
        return 2;
    }
    return RANKING_MAP[winnings]
}//몇등인지 안다.
export default getRanking;
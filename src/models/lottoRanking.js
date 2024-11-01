import { RANKING_MAP } from "../constants/constants.js";

function lottoRanking(winnings,difference,bonusNum){
    if ((difference.length===1) && difference[0]===bonusNum){
        return 2
    }
    return RANKING_MAP[winnings]
}//몇등인지 안다.
export default lottoRanking
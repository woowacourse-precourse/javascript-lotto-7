//취합할거임
import compareLotto from "./compareLotto.js"
import getRevenue from "./getRevenue.js";
import getRanking from "./getRanking.js"

function lottoResultCalculator(ticket,winningNums,bonusNum){
    const compareLottoResult = compareLotto(ticket,winningNums)
    const winnings = compareLottoResult.winnings;//집합 개수
    const difference = compareLottoResult.difference//차집합. 보너스 숫자 때문에 필요함
    const ranking = getRanking(winnings,difference,bonusNum);
    const revenue = getRevenue(ranking)
    return {ranking,revenue}
}
export default lottoResultCalculator
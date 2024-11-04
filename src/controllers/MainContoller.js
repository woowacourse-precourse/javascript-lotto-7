import lottoResultCalculator from "../models/lottoResultCalculator.js";
import OutputView from "../views/OutputView.js";
import helper from "./SubController.js";

export class MainController{
    async run(){
        try{
            const {purchaseAmount,tickets,winningNums,bonusNum,rankingResult} = await helper()//await를 안쓰면 helper함수의 결과가 완전히 반환되기 전에 run이 실행함
            
            let totalRevenue=0;
            for (let i = 0; i < Math.ceil(purchaseAmount/1000); i++) {
                const { ranking, revenue } = lottoResultCalculator(tickets[i],winningNums,bonusNum);
                totalRevenue += revenue
                rankingResult[ranking] = +1;
            }
            OutputView.printWinningStatistics(rankingResult)
            OutputView.printRateReturn(totalRevenue,purchaseAmount)
        }catch(error){
            throw error;
        }
    }
}
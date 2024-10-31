import { MissionUtils, Console } from "@woowacourse/mission-utils";
import UserInput from "./Input.js";
import DisplayOutput from "./DisplayOutput.js";
import { LOTTO } from "./constants.js";

class Game {

    purchaseLotto (paidMoney) {
        if (paidMoney % 1000 !== 0) {
            throw new Error(`[ERROR] 로또 1장당 금액은 ${LOTTO.TICKET_PRICE}입니다. 거스름돈 없이 해주세요`);
        }
    
        const ticketCount = Math.floor(paidMoney / 1000);
        return ticketCount;
    }

    generateLotto (count) {
        const lottos = [];

        for (let i = 0; i < count; i++) {
            const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            lottos.push(lotto.sort((a,b) => a-b));
          }

        return lottos;
    }

    splitWinningNumbers (winningNumber) {
        return winningNumber.split(',').map(num => Number(num));
    }


    countMatchingNumber (orderedWinningNumber, orderedLottoNumber){
        let count = 0;
        for (let i = 0 ; i < 6 ; i ++){
            if (orderedWinningNumber[i] === orderedLottoNumber[i]){
                count++;
            }
        }
        return count;
    }

    updateWinnerrReult (lottoReult, matchedCount, bonusFlag ){
        if ( matchedCount === 5 && bonusFlag ){
            lottoReult[1][0]++;
        }

        lottoReult[0][matchedCount]++;

    }

    checkLottoResult ( lotto , winningNumber, bonusNumber) {
        // First Array normal winners, second array bouns winners
        const lottoReult = [Array(6).fill(0), [0]];
        const orderedWinningNumber = winningNumber.sort((a,b) => a-b);

        for ( const lottoNumbers of lotto ){
            const orderedLottoNumber = lottoNumbers.sort((a,b) => a-b );
            const bunusFlag = orderedLottoNumber.includes(bonusNumber);

            const matchedCount = this.countMatchingNumber(orderedWinningNumber, orderedLottoNumber);
            this.updateWinnerrReult(lottoReult, matchedCount, bunusFlag);
        }
        return lottoReult;
    }

    calculateProfit ( lottoReult, paidMoney){
        let totalPrize = 0;
        let profit = 0;
        const winnerPrice = [[0,0,5_000,50_000,1_500_000,2_000_000_000], [30_000_000]];

        for (let i = 0 ; i < 6 ; i++){
            totalPrize  += winnerPrice[0][i] * lottoReult[0][i] ;
        }

        // Add Bonus winner prize
        totalPrize += winnerPrice[1][0] * lottoReult[1][0] ;

        profit = (totalPrize/paidMoney)*100;
        return parseFloat(profit.toFixed(2));
    }
}

export default Game;

const test = new Game();
const userInput = new UserInput();
const displayOutput = new DisplayOutput();


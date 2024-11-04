import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { LOTTO_INFO } from "../config/constants.js";
import Lotto from "../lotto/Lotto.js";

class Game {

    purchaseLotto (paidMoney) {
        const ticketCount = Math.floor(paidMoney / 1000);
        return ticketCount;
    }

    generateLotto (count) {
        const lottos = [];

        for (let i = 0; i < count; i++) {
            const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            const lotto = new Lotto(lottoNumbers);
            lottos.push(lotto);
        }

        return lottos;
    }

    splitWinningNumbers (winningNumber) {
        return winningNumber.split(',').map(num => Number(num));
    }


    countMatchingNumber (orderedWinningNumber, orderedLottoNumber){
        let count = 0;
        for (let i = 0 ; i < 6 ; i++){
            if (orderedLottoNumber.includes(orderedWinningNumber[i]) ){
                count++;
            }
        }
        return count;
    }

    updateWinnerrReult (lottoReult, matchedCount, bonusFlag ){
        if ( matchedCount === 5 && bonusFlag ){
            lottoReult[1][0] += 1 ;
        }

        lottoReult[0][matchedCount] += 1;
        return lottoReult;

    }

    checkLottoResult ( lottoPackage , winningNumber, bonusNumber) {
        /**
         * 로또 결과 형식:
         * lottoResult = [[7등수, 6등수, 5등수, 4등수, 3등수, 2등수, 1등수], [보너스 당첨자 수]]
         * @param {Array<Array<number>>} lottoPackage - 2차원 배열
        */
        let lottoReult = [Array(7).fill(0), [0]];
        const orderedWinningNumber = [...winningNumber].sort((a,b) => a-b);

        for ( const lotto of lottoPackage ){
            const lottoNumbers = lotto.getLottoNumbers();
            const bunusFlag = lottoNumbers.includes(bonusNumber);

            const matchedCount = this.countMatchingNumber(orderedWinningNumber, lottoNumbers);
            lottoReult = this.updateWinnerrReult(lottoReult, matchedCount, bunusFlag);

        }
        return lottoReult;
    }

    #calculatePrize (lottoReult){
        let totalPrize = 0;
        const prizeKeys = Object.keys(LOTTO_INFO.PRIZE);
        const bonusPrizeKey = Object.keys(LOTTO_INFO.BONUS_PRIZE);
        let i = 0;

        for (const prizeKeyword of prizeKeys){
            totalPrize  += LOTTO_INFO.PRIZE[prizeKeyword] * lottoReult[0][i] ;
            i += 1;
        }

        totalPrize += LOTTO_INFO.BONUS_PRIZE[bonusPrizeKey] * lottoReult[1][0];

        return totalPrize;
    }

    calculateProfit ( lottoReult, paidMoney){
        let totalPrize = this.#calculatePrize(lottoReult);
        let profit = 0;

        profit = (totalPrize/paidMoney)*100;
        return parseFloat(profit.toFixed(1));
    }
}

export default Game;



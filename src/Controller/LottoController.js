import RandomNum from "../utils/RandomNum.js";
import Parser from "../utils/Parser.js";
import Lotto from "../Model/Lotto.js";
import { number, winningLottoCountPrice } from "../constants.js";

export default class LottoController {

    static getUserLotto(lottoCount) {
        return Array.from({ length: lottoCount }, () => RandomNum.getNumber().sort((a,b) => a-b)); 
    }

    static createWinningLotto(winningNumbers) {
        const winningLotto = Parser.separaterLottoNumber(winningNumbers);

        return new Lotto(winningLotto);
    }

    static getStatisticsLotto({userLottos, winningLotto, bonus}) {
        const statisticsCountMap = this.statisticsInit();

        return this.compareUserLottoWithWinningLotto({userLottos, winningLotto, bonus, statisticsCountMap});
    }

    static statisticsInit() {
        const statisticsCountMap = this.countInit();

        return statisticsCountMap;
    }

    static countInit() {
        const statisticsCountMap = new Map();
        winningLottoCountPrice.forEach((lotto) => statisticsCountMap.set(lotto.count, number.DEFAULT_COUNT));

        return statisticsCountMap;
    }

    static compareUserLottoWithWinningLotto({userLottos, winningLotto, bonus, statisticsCountMap}) {
        userLottos.forEach(userLotto => {
            const {matchCount, bonusMatched} = this.getLottoSameCount(userLotto, winningLotto, bonus);
            if(bonusMatched || matchCount === number.FIVE) {
                statisticsCountMap.set(number.FIVE_BONUS, statisticsCountMap.get(number.FIVE_BONUS)+1);
            }
            else if(statisticsCountMap.has(matchCount))
                statisticsCountMap.set(matchCount, statisticsCountMap.get(matchCount)+1);
        });

        return statisticsCountMap;
    }

    static getLottoSameCount(userLotto, winningLotto, bonus) {
        let userLottoIndex = 0;
        let winningLottoIndex = 0;
        let matchCount = 0;
        let bonusMatched = false;

        while(userLottoIndex < userLotto.length && winningLottoIndex < winningLotto.length) {
            if(userLotto[userLottoIndex] === winningLotto[winningLottoIndex]) {
                matchCount += 1;
                winningLottoIndex += 1;
                userLottoIndex += 1;
            }   
            else if(userLotto[userLottoIndex] > winningLotto[winningLottoIndex])
                winningLottoIndex += 1;
            else userLottoIndex += 1;
        }

        bonusMatched = this.isMatchBonus(userLotto, bonus);

        return {matchCount, bonusMatched};
    }

    static isMatchBonus(userLotto, bonus) {
        return userLotto.includes(bonus);
    }
}

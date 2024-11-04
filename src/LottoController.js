import RandomNum from "./RandomNum.js";
import Parser from "./Parser.js";
import Lotto from "./Lotto.js";
import { numbers, winningLottoCountPrice } from "./constants.js";
import Calculator from "./Calculator.js";

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
        winningLottoCountPrice.forEach((lotto) => statisticsCountMap.set(lotto.count, numbers.DEFAULT_COUNT));

        return statisticsCountMap;
    }

    static compareUserLottoWithWinningLotto({userLottos, winningLotto, bonus, statisticsCountMap}) {
        userLottos.forEach(userLotto => {
            const {matchCount, bonusMatched} = this.getLottoSameCount(userLotto, winningLotto, bonus);
            if(bonusMatched || matchCount === 5) {
                statisticsCountMap.set(numbers.FIVE_BONUS, statisticsCountMap.get(numbers.FIVE_BONUS)+1);
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






    

    //유저 로또 리스트를 돌면서 당첨 리스트와 비교해야한다.
    //맞힌 갯수에 대한 배열을 생성한다.
    //배열은 총 7개
    //인덱스 
    //맞힌 개수가 3개 이상 6개 이하인지 체크 
    //맞힌 개수가 5개 일 경우, 보너스볼도 체크한다.
    //맞힌 갯수 Max를 구해야한다.
    //만약 맞힌 갯수가 5개일 경우, 보너스 숫자도 맞는지 확인해야한다.

    //각각 일치하는 갯수를 저장해야한다.
    //map으로 저장? 
}

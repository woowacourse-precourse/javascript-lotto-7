import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const PRIZE_AMOUNTS = [5000, 50000, 1500000, 30000000, 2000000000];

const PRICE_PER_LOTTO = 1000;

export default class LottoGame {
    #purchaseAmount;
    #lottoList;
    #winNumbers;
    #bonusNumber;

    constructor(purchaseAmount) {
        this.#validatePurchaseAmount(purchaseAmount);
        this.#purchaseAmount = this.#parseToNumber(purchaseAmount);
    }

    #validatePurchaseAmount(stringAmount) {
        const numberAmount = Number(stringAmount.trim());
        
        if (Number.isNaN(numberAmount)) {
            throw new Error('[ERROR] 구입 금액에 숫자를 입력해주세요.');
        }
    
        if ((numberAmount % PRICE_PER_LOTTO)) {
            throw new Error('[ERROR] 구입 금액을 1000원 단위로 입력해주세요.');
        }
    }

    #parseToNumber(stringAmount) {
        return parseInt(stringAmount.trim());
    }

    async start() {
        this.buyLottos();
        await this.getWinNumbers();
        this.validateWinNumbers();
        await this.getBonusNumber();
        this.validateBonusNumber();
        this.printLottoQtyAndNumbers();
        this.printWinResult();
    }

    buyLottos() {
        const quantity = this.calcPurchasableLotto();
        this.#lottoList = Array(quantity).fill(null).map(() => {
            const pickedNumbers = this.pickRandomRottoNumbers();
            return new Lotto(pickedNumbers);
        });
    }

    calcPurchasableLotto() {
        return this.#purchaseAmount / PRICE_PER_LOTTO;
    }
    
    pickRandomRottoNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    async getWinNumbers() {
        const winNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해주세요.\n');
        this.#winNumbers = winNumbers.trim();
    }
    async getBonusNumber() {
        const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해주세요.\n');
        this.#bonusNumber = bonusNumber.trim();
    }

    validateWinNumbers() {
        const winNumbers = this.#winNumbers.trim().split(',').map(Number);

        if (!this.#winNumbers) {
            throw new Error('[ERROR] 공백은 허용되지 않습니다.')
        }
        const invalidNumbers = winNumbers.some(v => Number.isNaN(v));
        if (invalidNumbers) {
            throw new Error('[ERROR] 숫자가 아닌 문자가 입력됐습니다.');
        }
        const invalidRange = winNumbers.some(v => v < 1 || v > 45);
        if (invalidRange) {
            throw new Error('[ERROR] 제한된 범위를 벗어나는 값을 입력하였습니다.');
        }
        if (winNumbers.length !== 6) {
            throw new Error('[ERROR] 당첨 번호 6개를 입력해주세요.');
        }
        this.hasWinNumbersDuplicate(winNumbers);
        
    }
    validateBonusNumber() {
        const winNumbers = this.#winNumbers.trim().split(',').map(Number);
        const bonusNumber = parseInt(this.#bonusNumber.trim());

        if (!this.#bonusNumber) {
            throw new Error('[ERROR] 공백은 허용되지 않습니다.')
        }
      
        if (Number.isNaN(bonusNumber)) {
            throw new Error('[ERROR] 숫자가 아닌 문자가 입력됐습니다.');
        }
        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error('[ERROR] 제한된 범위를 벗어나는 값을 입력하였습니다.');
        }
     
        this.hasWinNumbersDuplicate(winNumbers, bonusNumber);
    }

    hasWinNumbersDuplicate(winNumbers, bonusNumber = 0) {
        winNumbers.push(bonusNumber);
        const numbersSet = new Set(winNumbers);
        if (numbersSet.size !== winNumbers.length) {
            throw new Error('[ERROR] 당첨 번호와 보너스 번호 전체는 중복되지 않아야 합니다.');
        } 
    }

    printLottoQtyAndNumbers() {
        MissionUtils.Console.print(`${this.#lottoList.length}개를 구매했습니다.`);
        for(const lotto of this.#lottoList) {
            MissionUtils.Console.print('['+lotto.getLottoNumbers().join(', ')+']');
        }
    }

    printWinResult() {
        const rankList = this.countMatches();
        const MATCH_COUNT = [3, 4, 5, 5, 6];
        MATCH_COUNT.forEach((v, idx) => {
            let matchMassage = `${v}개 일치`;
            if(idx === 3) {
                matchMassage += ', 보너스 볼 일치';
            }
            MissionUtils.Console.print(`${matchMassage} (${PRIZE_AMOUNTS[idx].toLocaleString()}원) - ${rankList[idx]}개`);
        }) 
        const roi = this.printRoi(rankList);
        MissionUtils.Console.print(`총 수익률은 ${roi}%입니다.`);
    }

    printRoi(rankList) {
        let profit = 0;
        PRIZE_AMOUNTS.forEach((v, idx) => {
            profit += v * rankList[idx];
        })
        const roi = (profit / this.#purchaseAmount) * 100;
        
        return roi.toFixed(1);
    }

    countMatches() {
        const lottoList = this.#lottoList;
        const rankList = Array(5).fill(0);  // 5등부터 시작
        for (const lotto of lottoList) {
            const lottoNumbers = lotto.getLottoNumbers();
            const matchCountsInWinNb = this.countMatchesInWinNb(lottoNumbers);
            const rank = this.getRankByMatchCount(lottoNumbers, matchCountsInWinNb);
            if (rank) {
                rankList[rank - 1] += 1;
            }
        }
        console.log(rankList);
        return rankList;
    }

    countMatchesInWinNb(lottoNumbers) {
        let count = 0;
        lottoNumbers.forEach(v => {
            if (this.#winNumbers.indexOf(v) > -1) {
                count++;
            }
        })
        return count;
    }

    getRankByMatchCount(lottoNumbers, matchCountsInWinNb) {
        if (matchCountsInWinNb === 5 && lottoNumbers.some(v => v === this.#bonusNumber)) {
            return 4;
        }
        let rank = 0;
        switch (matchCountsInWinNb) {
            case 3:
                rank = 1;
                break;
            case 4:
                rank = 2;
                
                break;
            case 5:
                rank = 3;
                
                break;
            case 6:
                rank = 5;
                break;
        }
        return rank;
    }
    
}
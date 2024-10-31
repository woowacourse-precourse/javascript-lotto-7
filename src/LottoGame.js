import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const PRIZE_AMOUNTS = [2000000000, 30000000, 1500000, 50000, 5000];

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
        const numberAmount = parseInt(stringAmount.trim());
        
        if(Number.isNaN(numberAmount)) {
            throw new Error('[ERROR] 구입 금액에 숫자를 입력해주세요.');
        }
    
        if((numberAmount % PRICE_PER_LOTTO)) {
            throw new Error('[ERROR] 구입 금액을 1000원 단위로 입력해주세요.');
        }
    }

    #parseToNumber(stringAmount) {
        return parseInt(stringAmount.trim());
    }

    async start() {
        // TODO: refactor
        this.buyLottos();
        await this.getWinNumbers();
        await this.getBonusNumber();
        this.validateWinAndBonusNumbers();
        this.printLottoQtyAndNumbers();
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

    validateWinAndBonusNumbers() {
        // TODO: 분리
        const winNumbers = this.#winNumbers.trim().split(',').map(Number);
        const bonusNumber = parseInt(this.#bonusNumber.trim());

        if(!this.#winNumbers || !this.#bonusNumber) {
            throw new Error('[ERROR] 공백은 허용되지 않습니다.')
        }
        const invalidNumbers = winNumbers.some(v => Number.isNaN(v));
        if(invalidNumbers || Number.isNaN(bonusNumber)) {
            throw new Error('[ERROR] 숫자가 아닌 문자가 입력됐습니다.');
        }
        const invalidRange = winNumbers.some(v => v < 1 || v > 45);
        if(invalidRange || bonusNumber < 1 || bonusNumber > 45) {
            throw new Error('[ERROR] 제한된 범위를 벗어나는 값을 입력하였습니다.');
        }
        if(winNumbers.length !== 6) {
            throw new Error('[ERROR] 당첨 번호 6개를 입력해주세요.');
        }
        this.hasWinNumbersDuplicate(winNumbers, bonusNumber);
        
    }

    hasWinNumbersDuplicate(winNumbers, bonusNumber) {
        winNumbers.push(bonusNumber);
        const numbersSet = new Set(winNumbers);
        if(numbersSet.size !== winNumbers.length) {
            throw new Error('[ERROR] 당첨 번호와 보너스 번호 전체는 중복되지 않아야 합니다.');
        } 
    }

    printLottoQtyAndNumbers() {
        MissionUtils.Console.print(`${this.#lottoList.length}개를 구매했습니다.`);
        for(const lotto of this.#lottoList) {
            MissionUtils.Console.print(lotto.getLottoNumbers());
        }
    }

    
}
import {
    PLEASE_INPUT_RIGHT_BONUS_NUMBER,
    PLEASE_INPUT_RIGHT_WIN_NUMBERS,
} from "./constant.js";

class LottoMatcher {
    #winNumberList;
    #bonusNumber;
    #lottoRankResult;

    constructor() {
        this.#winNumberList = Array.from({ length: 45 }, (x) => 0);
        this.#lottoRankResult = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };
    }

    set winNumberList(winNumbers) {
        winNumbers = winNumbers.split(",");
        this.validateWinNumbers(winNumbers).forEach((winNumber) => {
            this.#winNumberList[winNumber - 1] = 1;
        });
    }

    set bonusNumber(bonusNumber) {
        bonusNumber = +bonusNumber;
        this.validateBonusNumber(bonusNumber);
        this.#bonusNumber = bonusNumber;
    }

    get lottoRankResult() {
        return this.#lottoRankResult;
    }

    get bonusNubmer() {
        return this.#bonusNumber;
    }

    get winNumberList() {
        return this.#winNumberList;
    }

    validateWinNumbers(numberList) {
        if (numberList.length !== 6)
            throw new Error(PLEASE_INPUT_RIGHT_WIN_NUMBERS);

        const filteredWinNumbers = numberList.map((number) => {
            number = +number.trim();

            if (isNaN(number) || number < 1 || number > 45)
                throw new Error(PLEASE_INPUT_RIGHT_WIN_NUMBERS);

            return number;
        });

        const uniqueWinNumbers = new Set(filteredWinNumbers);

        if (uniqueWinNumbers.size !== 6)
            throw new Error(PLEASE_INPUT_RIGHT_WIN_NUMBERS);

        return filteredWinNumbers;
    }

    validateBonusNumber(number) {
        if (isNaN(number) || number < 1 || number > 45)
            throw new Error(PLEASE_INPUT_RIGHT_BONUS_NUMBER);

        if (this.#winNumberList[number - 1] === 1)
            throw new Error(PLEASE_INPUT_RIGHT_BONUS_NUMBER);
    }

    makeResult({ lottoList }) {
        for (let i = 0; i < lottoList.length; i++) {
            const lotto = lottoList[i];
            const lottoResult = this.matchLotto(lotto);
            this.matchRank(lottoResult);
        }
    }

    matchLotto(lotto) {
        const result = {
            winNumberMatch: 0,
            bonusNumberMatch: 0,
        };

        for (let j = 0; j < lotto.length; j++) {
            const number = lotto[j];
            if (this.#winNumberList[number - 1] === 1) {
                result.winNumberMatch += 1;
                continue;
            }

            if (this.#bonusNumber === number) result.bonusNumberMatch += 1;
        }
        return result;
    }

    matchRank(lottoResult) {
        switch (lottoResult.winNumberMatch) {
            case 3:
                this.#lottoRankResult[5] = 1;
                break;
            case 4:
                this.#lottoRankResult[4] = 1;
                break;
            case 6:
                this.#lottoRankResult[1] = 1;
                break;
        }

        if (lottoResult.winNumberMatch === 5) {
            if (lottoResult.bonusNumberMatch === 1)
                this.#lottoRankResult[2] = 1;
            else this.#lottoRankResult[3] = 1;
        }
    }
}

export default LottoMatcher;

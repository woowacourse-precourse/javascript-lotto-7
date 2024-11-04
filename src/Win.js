import LottoArr from "./LottoArr.js"

export default class Win {
    #numbers = []
    #BONUS_NUMBER
    #matchCounts
    #TOTAL_PRISE
    #TOTAL_WIN
    #returnRate


    constructor(WINNING_NUMBERS) {
        //error test
        WINNING_NUMBERS.split(",").forEach(number => this.#numbers.push(Number(number.trim())))
    }

    getBonusNumber(BONUS_NUMBER) {
        this.#BONUS_NUMBER = BONUS_NUMBER
    }

    calculator(lottoArr) {
        this.#matchCounts = this.#filtering(lottoArr)
        this.#TOTAL_PRISE = this.#totalPrize()
        this.#TOTAL_WIN = this.#totalWins()
        this.#returnRate = (this.#TOTAL_PRISE / this.#TOTAL_WIN).toFixed(2)
    }

    #filtering(lottoArr) {
        const matchCounts = {
            '3': 0,
            '4': 0,
            '5': 0,
            '5+': 0,
            '6': 0
        }

        lottoArr.forEach((lotto) => {
            const matchCount = this.#numbers.reduce((count, number) => {
                return count + (lotto.includes(number) ? 1 : 0)
            }, 0)

            if (matchCount === 5 && lotto.includes(this.#BONUS_NUMBER)) {
                matchCounts['5+'] += 1
            } else if (matchCount > 2) {
                matchCounts[`${matchCount}`] += 1;
            }
        }
        )

        return matchCounts
    }

    #totalPrize() {
        const FIRST = 2000000000
        const SECOND = 30000000
        const THIRD = 1500000
        const FOURTH = 50000
        const FIFTH = 5000
        const PRIZE_ARR = [FIFTH, FOURTH, THIRD, SECOND, FIRST]

        const TOTAL = Object.keys(this.#matchCounts).reduce((total, key, index) => {
            const count = this.#matchCounts[key]
            const prize = PRIZE_ARR[index]
            return total + (count * prize)
        }, 0)
        return TOTAL
    }

    #totalWins() {
        return Object.keys(this.#matchCounts).reduce((total, key) => {
            return total + this.#matchCounts[key]
        }, 0)
    }

    print() {
        let result =
            `
        당첨 통계
        ---
        3개 일치 (5,000원) - ${this.#matchCounts['3']}개
        4개 일치 (50,000원) - ${this.#matchCounts['4']}개
        5개 일치 (1,500,000원) - ${this.#matchCounts['5']}개
        5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#matchCounts['5+']}개
        6개 일치 (2,000,000,000원) - ${this.#matchCounts['6']}개
        총 수익률은 ${this.#returnRate}%입니다.
        `
        return result
    }

}

//debug code
// const LottoArr = [
//     [8, 21, 23, 41, 42, 43],
//     [3, 5, 11, 16, 32, 38],
//     [7, 11, 16, 35, 36, 44],
//     [1, 8, 11, 31, 41, 42],
//     [13, 14, 16, 38, 42, 45],
//     [7, 11, 30, 40, 42, 43],
//     [2, 13, 22, 32, 38, 45],
//     [1, 3, 5, 14, 22, 45],
// ]
// const LOTTO_ARRAY = new LottoArr(5000)
// const win = new Win('1,2,3,4,5,6')
// win.getBonusNumber(7)

// const result = win.filtering(LOTTO_ARRAY.arr())
// console.log(result)

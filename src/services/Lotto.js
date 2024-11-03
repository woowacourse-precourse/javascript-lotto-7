import {Console} from "@woowacourse/mission-utils";

class Lotto {
    /*제공된 Lotto 클래스를 사용하여 구현해야 한다.
    Lotto에 numbers 이외의 필드(인스턴스 변수)를 추가할 수 없다.
    numbers의 접근 제어자인 #은 변경할 수 없다.
    Lotto의 패키지를 변경할 수 있다.
    통계를 내는 클래스 인거 같다
   */
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers.map((number) => Number(number));
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    setStatistics(lottoes, bonusNumber) { //2 차원 배열
        let matchCnt = 0
        let isBonusNumberMatch = false
        const statMatch = {
            three: 0,
            four: 0,
            five: 0,
            bonus: 0,
            six: 0,
        }
        for (const lotto of lottoes) {
            for (const lottoNum of lotto) {
                if (this.#numbers.includes(lottoNum)) {
                    matchCnt++
                }
                if (this.#numbers.includes(bonusNumber)) {
                    isBonusNumberMatch = true
                }
            }
            switch (matchCnt) {
                case 3:
                    statMatch.three += matchCnt;
                    break;
                case 4:
                    statMatch.four += matchCnt;
                    break;
                case 5:
                    statMatch.five += matchCnt;
                    break;
                case 6:
                    statMatch.six += matchCnt;
                    break;
            }
            if (matchCnt === 5 && isBonusNumberMatch) {
                statMatch.bonus += matchCnt
            }
            matchCnt = 0
        }
        return this.resultOutput(statMatch)
    }

    resultOutput(statMatch) {
        Console.print(`당첨통계\n---`)
        Object.values(statMatch).map((elem, idx) => {
            Console.print(obj[idx].content + elem + "개")
        })
    }
}

const obj = [
    {match: "three", content: "3개 일치 (5,000원) - "},
    {match: "four", content: "4개 일치 (50,000원) -"},
    {match: "five", content: "5개 일치 (1,500,000원) - "},
    {match: "bonus", content: "5개 일치, 보너스 볼 일치 (30,000,000원) - "},
    {match: "six", content: "6개 일치 (2,000,000,000원) - "}
]
export default Lotto;

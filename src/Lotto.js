import {Console, MissionUtils} from "@woowacourse/mission-utils";

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
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    setStatistics(lottoNumbers, bonusNumber) {
        let matchCnt = 0
        let isBonusNumberMatch = false
        for (const lottoNumber of lottoNumbers) {
            if (this.#numbers.includes(lottoNumber)) {
                matchCnt++
            }
            if (this.#numbers.includes(bonusNumber)) {
                isBonusNumberMatch = true
            }
        }
        return this.resultOutput({matchCnt, isBonusNumberMatch})
    }

    resultOutput({matchCnt, isBonusNumberMatch}) {
        Console.print(`당첨통계\n---`)

    }


    // TODO: 추가 기능 구현
}

export default Lotto;

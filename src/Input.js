import {Console, Random} from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";

export async function howManyLotto() { 
    while (true) { // 유효한 입력을 받을 때까지 반복 
        try { 
            const budget = await Console.readLineAsync("구입금액을 입력해 주세요.\n"); 
            if ((budget % 1000) !== 0 || isNaN(budget) || budget <= 0) { 
                throw new Error("[ERROR] 로또는 1000원 단위로 한장 씩 구매할 수 있습니다.\n"); 
            } 
            const lottoArray = chosenNumbers(budget / 1000);
            return lottoArray; 
        } 
        catch (error) { 
            Console.print(error.message); // 에러 메시지 출력 
        } 
    }
}


async function chosenNumbers(howMany) {
    Console.print(" ");
    Console.print(howMany +"개를 구매했습니다.\n");
    let numbers = [];
    const chosenNumbersArray = [];
    for (let i = 0; i < howMany; i++) {
        numbers[i] = Random.pickUniqueNumbersInRange(1, 45, 6);
        Console.print("[" + numbers[i].join(', ') + "]");
        chosenNumbersArray[i] = new Lotto(numbers[i]);
    }

    return chosenNumbersArray;
}

export async function getWinNumber() {
    Console.print(" ");
    let winNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    winNumbers = winNumbers.split(',').map(num => Number(num.trim())); // 문자열을 숫자로 변환

    // 유효성 검사
    const uniqueNumbers = new Set(winNumbers); // 중복 제거된 숫자 집합 생성
    if (winNumbers.length !== 6 || uniqueNumbers.size !== 6 || winNumbers.some(num => isNaN(num) || num < 1 || num > 45)) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않은 숫자 6개여야 합니다.");
    }

    return winNumbers;
}


export async function getBonusNumber(winNumbers) {
    Console.print(" ");
    const bonusNum = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");

    if (winNumbers.includes(Number(bonusNum))) {
        throw new Error(`[ERROR] 보너스 번호 ${bonusNum}은 당첨 번호에 포함되어 있습니다.`);
    }

    return Number(bonusNum);
}
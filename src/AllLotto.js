import { Console } from "@woowacourse/mission-utils"
import makeLotto from "./MakeLotto.js";
import generateRandomNumbers from "./RandomNumber.js";

const printAllLotto = (num) => {
    const allLottos = [];
    for (let i = 0; i < num; i++) {
        const randomnums = generateRandomNumbers(); // 랜덤 6개의 숫자 생성
        const newLotto = makeLotto(randomnums); // 로또 객체 생성
        Console.print(`[${newLotto.getNumbers().join(", ")}]`); // 로또 번호 출력
        allLottos.push(newLotto); // 해당 로또 저장
    }
    return allLottos; // 모든 로또 저장한 배열
}

export default printAllLotto;
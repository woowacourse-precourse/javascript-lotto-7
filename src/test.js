import Lotto from './Lotto.js';
import Purchase from './Purchase.js';
import { Console, Random } from "@woowacourse/mission-utils";

const myPurchase = new Purchase();
const count = await myPurchase.getPayment();

Console.print(`${count}개를 구매했습니다.`);

let purchaseArray = [];

let sumAmount = 0;

// 구입한 로또 번호들 추가
for (let i = 0; i < count; i++) {
    let tempLotto = new Lotto();
    tempLotto.printNumbers();
    purchaseArray.push(tempLotto);
}

Console.print("");

// 당첨 번호 입력
let winLotto = new Lotto();
const winArray = await winLotto.getWinNumbers();
const winBonus = await winLotto.getBonusNumber();

let mapCount = new Map();
purchaseArray.forEach((lotto) => {
    const tempAmount = lotto.checkWinNumbers(winArray);
    mapCount = lotto.countStatistics(mapCount, tempAmount);
})

Console.print(mapCount);
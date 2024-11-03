// 유틸 함수들(입출력 및 계산)

import Lotto from "./Lotto.js";

function calcEarn(){
    let sum = 0;
    sum += Lotto.getResult(3) * 5000;
    sum += Lotto.getResult(4) * 50000;
    sum += Lotto.getResult(5) * 1500000;
    sum += Lotto.getResult(7) * 30000000;
    sum += Lotto.getResult(6) * 2000000000;

    return sum;
}

export {calcEarn};
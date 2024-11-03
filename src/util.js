// 유틸 함수들(입출력 및 계산)

function calcEarn(result, lottoCnt){
    let sum = 0;
    sum += result[3] * 5000;
    sum += result[4] * 50000;
    sum += result[5] * 1500000;
    sum += result[7] * 30000000;
    sum += result[6] * 2000000000;

    return parseFloat(sum / (lottoCnt * 1000) * 100).toFixed(1);
}

export {calcEarn};
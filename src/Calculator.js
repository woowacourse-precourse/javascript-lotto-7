import { winningLottoCountPrice, numbers } from "./constants.js";
export default class Calculator {

    static divide(num1, num2) {
        return num1/num2;
    }

    static sum(statisticsCountMap) {
        const total = Array.from(statisticsCountMap).reduce((total, [key, value]) => {
            const prizeInfo = winningLottoCountPrice.find(item => item.count === key);
            if (prizeInfo) {
                total += parseInt(prizeInfo.price.replace(/,/g, "")) * value;
            }
            // if (value > numbers.DEFAULT_COUNT) {
            //     total += parseInt(winningLottoCountPrice.get(key).replace(/,/g, "") * value);
            // }
            return total;
        }, 0);

        return total;
    }

    static earningsRate(userMoney, earnMoney) {
        return ((earnMoney/userMoney) * numbers.HUNDRED).toFixed(numbers.ROUND_NUMBER);
    }


}
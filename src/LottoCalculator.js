import { PRIZE_TABLE } from "./Constant.js";

export const calculateWinning = (winningNumber, userNumbers) => {
    const [winningArray, bonus] = winningNumber;

    const prizeCounts = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };

    userNumbers.forEach(numbers => {
        const matchingCount = numbers.filter(number => winningArray.includes(number)).length;

        if (matchingCount === 5 && numbers.includes(bonus)) {
            prizeCounts['5+bonus'] += 1;
        } else if (matchingCount >= 3) {
            prizeCounts[matchingCount] += 1;
        }
    });

    return prizeCounts;
}

export const getWinningPrice = (result) => {
    let totalPrize = 0;
    for (const [key, count] of Object.entries(result)) {
        if (count > 0) {
            const prize = parseInt(PRIZE_TABLE[key].replace(/,/g, ''), 10);
            totalPrize += prize * count;
        }
    }
    
    return totalPrize;
}

export const calculateProfit = (price, winningPrice) => {
    const profit = winningPrice/price * 100;

    return profit.toFixed(1);
}
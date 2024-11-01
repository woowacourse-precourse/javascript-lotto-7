export const calculateWinningCounts = (lottos, winningNumbers, bonusNumber) => {
    const winningsCount = {match_3: 0, match_4: 0, match_5: 0, match_6_bonus: 0, match_6_full: 0};

    lottos.forEach((lotto) => {
        const matchedNumbers = winningNumbers.filter((num) => lotto.includes(num)).length;
        const hasBonusMatch = lotto.includes(bonusNumber);

        if (matchedNumbers === 6) winningsCount.match_6_full += 1;
        else if (matchedNumbers === 5 && hasBonusMatch) winningsCount.match_6_bonus += 1;
        else if (matchedNumbers === 5) winningsCount.match_5 += 1;
        else if (matchedNumbers === 4) winningsCount.match_4 += 1;
        else if (matchedNumbers === 3) winningsCount.match_3 += 1;
    });

    return winningsCount;
}

export const calculateTotalPrize = (winningsCount, prizeInfo) => {
    return Object.entries(prizeInfo).reduce((total, [key, { prize }]) => {
        return total + winningsCount[key] * prize
    }, 0);
}

export const calculateYieldRate = (purchaseAmount, totalPrize) => (totalPrize / purchaseAmount) * 100;
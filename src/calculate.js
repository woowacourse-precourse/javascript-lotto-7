class Calculate {
    static calculateWinningAmount(lottoTickets, winningNumbers, bonusNumber) {
        const winningAmount = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
        lottoTickets.forEach(ticket => {
            const matchCount = ticket.filter(num => winningNumbers.includes(num)).length;
            switch (matchCount) {
                case 6:
                    winningAmount[6] += 1;
                    break;
                case 5:
                    if(ticket.includes(bonusNumber)) {
                        winningAmount[5.5] += 1;
                    } else {
                        winningAmount[5] += 1;
                    }
                    break;
                case 4:
                    winningAmount[4] += 1;
                    break;
                case 3: 
                    winningAmount[3] += 1;
                    break;
                default:
                    break;    
            }
        });
        return winningAmount;
    }

    static calculateProfitRate(winningAmount, purchaseAmount) {
        const winningMoney = {
            3: 5000,
            4: 50000,
            5: 1500000,
            5.5: 30000000,
            6: 2000000000
        };
        const totalMoney = Object.keys(winningAmount).reduce((acc, key) => acc + (winningAmount[key] * winningMoney[key]),0);
        const profitRate = (totalMoney / purchaseAmount) * 100;
        return Math.round(profitRate * 100) / 100;
    }
}

export default Calculate; 
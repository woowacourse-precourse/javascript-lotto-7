class Calculate {
    static calculateWinningAmount(lottoTickets, winningNumbers, bonusNumber) {
        const winningAmount = { 3: 0, 4: 0, 5: 0, 6: 0, '2등': 0 };
        lottoTickets.forEach(ticket => {
            const matchCount = ticket.filter(num => winningNumbers.includes(num)).length;
            switch (matchCount) {
                case 6:
                    winningAmount[6] += 1;
                    break;
                case 5:
                    if(ticket.includes(bonusNumber)) {
                        winningAmount['2등'] += 1;
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
}

export default Calculate; 
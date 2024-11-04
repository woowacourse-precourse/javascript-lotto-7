function compareLotto(ticket,winningNums){
    const intersection = ticket.filter(num => winningNums.includes(num));//교집합
    const difference = ticket.filter(num=>!winningNums.includes(num));
    return {
        winnings: intersection.length,
        difference
    }
}
export default compareLotto
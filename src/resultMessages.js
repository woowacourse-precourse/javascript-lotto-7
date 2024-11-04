export const getResultMessages = winningResults => {
  const resultMessages = [
    `3개 일치 (5,000원) - ${winningResults[3]}개`,
    `4개 일치 (50,000원) - ${winningResults[4]}개`,
    `5개 일치 (1,500,000원) - ${winningResults[5]}개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResults['5+bonus']}개`,
    `6개 일치 (2,000,000,000원) - ${winningResults[6]}개`
  ]
  return resultMessages.map(message => message.trim());
}

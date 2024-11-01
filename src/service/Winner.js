class Winner {
  checkRanking(results) {
    let matchCounts = [0, 0, 0, 0, 0];
    results.forEach((result) => {
      if (result.numberMatch === 6) matchCounts[4]++;
      else if (result.numberMatch === 5 && result.bonusMatch === true)
        matchCounts[3]++;
      else if (result.numberMatch === 5) matchCounts[2]++;
      else if (result.numberMatch === 4) matchCounts[1]++;
      else if (result.numberMatch === 3) matchCounts[0]++;
    });
    return matchCounts;
  }
}
export default Winner;

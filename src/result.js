export function evaluateResult(lottos, pickedNumbers, pickedBonus){
  const rankCount = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0};  // 객체는 키-값 쌍으로 구성

    lottos.forEach(lotto => {
  const numbers = lotto.getNumbers(); // 각 로또 번호를 가져오는 메소드
  const matchedCount = countMatches(numbers, pickedNumbers);
  const isBonusMatched = numbers.includes(pickedBonus);

  if (matchedCount === 6) {
    rankCount[1]++;   // rankCount[1]에서 1은 키를 참조
  } else if (matchedCount === 5 && isBonusMatched) {
    rankCount[2]++;
  } else if (matchedCount === 5) {
    rankCount[3]++;
  } else if (matchedCount === 4) {
    rankCount[4]++;
  } else if (matchedCount === 3) {
    rankCount[5]++;
  }
});

  return rankCount;
}

export function countMatches(lotto, pickedNumbers) {
  return lotto.filter(number => pickedNumbers.includes(number)).length;
}

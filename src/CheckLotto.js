const ranking = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
}

const checkRank = (winNum, bonusNum, lottoNum) => {
    const combinedArray = [...winNum, ...lottoNum]; // 당첨번호와 로또번호를 합친 배열
    const lottoSet = new Set(combinedArray); // 중복이 없도록 Set으로 변환
    const diffCount = lottoSet.size - 6; // 일치하지 않는 숫자의 개수
    const matchCount = 6 - diffCount; // 일치하는 숫자의 개수
    rank(matchCount, bonusNum, lottoNum);
}

const rank = (matchCount, bonusNum, lottoNum) => {
    if (matchCount === 6) {
        ranking.first++;
    } else if (matchCount === 5) {
        if (lottoNum.includes(bonusNum)) {
            ranking.second++;
        } else {
            ranking.third++;
        }
    } else if (matchCount === 4) {
        ranking.fourth++;
    } else if (matchCount === 3) {
        ranking.fifth++;
    }
}

export { ranking, checkRank };
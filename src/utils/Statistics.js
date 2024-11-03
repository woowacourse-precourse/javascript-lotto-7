class Statistics {
  static countOccurrences(arr) {
    const frequencyMap = {};

    // 각 값의 빈도 계산
    arr.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    for (let i = 1; i <= 5; i++) {
      if (!frequencyMap[i]) frequencyMap[i] = frequencyMap[i] || 0;
    }

    return Object.entries(frequencyMap)
      .map(([key, count]) => ({
        rank: parseInt(key, 10),
        count,
      }))
      .sort((a, b) => parseInt(b.rank, 10) - parseInt(a.rank, 10)); // 내림차순 정렬
  }
}

export default Statistics;

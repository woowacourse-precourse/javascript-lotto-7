class Statistics {
  static countOccurrences(arr) {
    const frequencyMap = {};

    // 각 값의 빈도 계산
    arr.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    return Object.entries(frequencyMap)
      .map(([key, count]) => ({
        money: key,
        count,
      }))
      .sort((a, b) => parseInt(b.money, 10) - parseInt(a.money, 10)); // 10진수로 변환 후 내림차순 정렬
  }
}

export default Statistics;

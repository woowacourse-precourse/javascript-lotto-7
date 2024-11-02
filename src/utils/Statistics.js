class Statistics {
  static countOccurrences(arr) {
    const frequencyMap = {};

    // 각 값의 빈도 계산
    arr.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    // 빈도 맵을 [{ money, count }] 형식의 배열로 변환
    return Object.entries(frequencyMap).map(([key, count]) => ({
      money: key, // 문자열 그대로 반환
      count,
    }));
  }
}
export default Statistics;

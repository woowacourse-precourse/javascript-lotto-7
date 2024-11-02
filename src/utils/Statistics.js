class Statistics {
  static countOccurrences(arr) {
    const result = [];
    arr.forEach((money) => {
      result.push([money, 1]);
      if (result[0] === money) {
        result.push([money, 1]);
      }
    });
  }
}

// 사용 예시
const result = Statistics.countOccurrences([123, 1234, 123, 1231, 1234]);
console.log(result); // [[123, 2], [1234, 2], [1231, 1]]

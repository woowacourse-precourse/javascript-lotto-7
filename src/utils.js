import { LOTTO_PRICE } from "./constants.js";

export function formatLottoNumbers(numbers) {
  return `[${numbers.sort((a, b) => a - b).join(', ')}]`;
}

export function calculateProfitRate(results) {
  // results가 객체인지 확인
  if (typeof results !== 'object' || results === null) {
    console.error("Results는 객체여야 합니다.");
    return 0; // 또는 다른 적절한 기본값을 반환
  }

  // 총 수익 계산
  const totalEarnings = Object.entries(results).reduce((acc, [key, value]) => {
    // 당첨금액을 반환하는 로직
    switch (key) {
      case 'FIRST':
        return acc + value * 2000000000; // 1등
      case 'SECOND':
        return acc + value * 30000000; // 2등
      case 'THIRD':
        return acc + value * 1500000; // 3등
      case 'FOURTH':
        return acc + value * 50000; // 4등
      case 'FIFTH':
        return acc + value * 5000; // 5등
      default:
        return acc; // 'NONE'은 수익을 더하지 않음
    }
  }, 0);

  // totalSpent를 계산할 때는 results의 각 값에 해당하는 개수(일치하는 개수)를 LOTTO_PRICE와 곱해줌
  const totalSpent = Object.values(results).reduce((acc, value) => acc + value, 0) * LOTTO_PRICE;

  // 수익률 계산
  // 총 지출이 0일 경우 0%로 반환
  return totalSpent === 0 ? 0 : ((totalEarnings / totalSpent) * 100).toFixed(1);
}
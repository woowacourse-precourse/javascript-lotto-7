import getRandomNumbers from '../src/Utils/getRandomNumbers.js';
import Rules from '../src/Utils/Rules.js';

// - 2. 랜덤 번호 6개 추첨

//   - 로또에 쓰일 번호 6개 랜덤추첨

describe('랜덤숫자 생성기 함수 테스트', () => {
  const numbers = getRandomNumbers();

  test('생성기 함수로 만든 숫자는 6개이어야 합니다.', () => {
    expect(numbers.length).toBe(6);
  });

  test('생성기 함수로 나온 값은 모두 숫자여야 합니다.', () => {
    expect(numbers.some((number) => isNaN(number))).toBe(false);
  });

  test('생성기 함수로 나온 값은 1부터 45 사이여야 합니다.', () => {
    expect(Rules.isNotRangedValue(numbers)).toBe(false);
  });

  test('생성기 함수로 나온 모든 숫자는 달라야 합니다.', () => {
    expect(Rules.isDuplicatedValue(numbers)).toBe(false);
  });
});

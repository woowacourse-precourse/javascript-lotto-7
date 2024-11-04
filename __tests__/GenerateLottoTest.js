import { generateLotto } from '../src/utils/index.js';

describe('로또 번호를 생성하는 함수 테스트', () => {
  test('생성된 로또 번호가 6개 인지 확인한다.', () => {
    const numbers = generateLotto();
    expect(numbers.length).toEqual(6);
  });

  test('로또 번호가 1에서 45 사이의 수인지 확인한다.', () => {
    const numbers = generateLotto();
    const isNumberInRange = numbers.every(
      (number) => number >= 1 && number <= 45,
    );
    expect(isNumberInRange).toBeTruthy();
  });

  test('로또 번호가 오름차순으로 정렬되어 있는지 확인한다.', () => {
    const numbers = generateLotto();
    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    expect(numbers).toEqual(sortedNumbers);
  });
});

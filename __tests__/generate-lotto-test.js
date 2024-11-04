import generateLottoList from '../src/utils/generate-lotto.js';
import { LOTTO_TICKET_PRICE } from '../src/constants/constants.js';

describe('로또 발행 테스트', () => {
  const amount = 5000;
  const lottos = generateLottoList(amount);

  test('입력한 금액에 따라 올바른 개수의 로또가 발행되는지 확인한다', () => {
    const expectedLottoCount = amount / LOTTO_TICKET_PRICE;

    expect(lottos.length).toBe(expectedLottoCount);
  });

  test('각 로또 번호가 1 ~ 45 사이의 중복되지 않는 6개의 숫자로 구성되어 있는지 확인한다', () => {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();

      expect(numbers.length).toBe(6);
      expect(new Set(numbers).size).toBe(6);
      numbers.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });
    });
  });

  test('각 로또 번호가 오름차순으로 정렬되어 있는지 확인한다', () => {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      expect(numbers).toEqual(sortedNumbers);
    });
  });
});

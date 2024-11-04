import { Random } from '@woowacourse/mission-utils';
import lottoConfig from '../src/config.js';
import LottoGenerator from '../src/lotto/LottoGenerator.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickUniqueNumbersInRange);
};

const { NUMBER_COUNT, NUMBER_RANGE } = lottoConfig;
const lottoNumberRange = {
  startNumber: NUMBER_RANGE.START_NUMBER,
  endNumber: NUMBER_RANGE.END_NUMBER,
}

describe('로또 발행 테스트', () => {
  test.each(
    [
      {
        name: '구매 개수만큼 로또를 발행시킬 수 있다.',
        randomValue: [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
        ],
        expectResult: (lottoGenerator) => {
          const purchaseCount = 4;
          const lottos = lottoGenerator.generateLottosBycount(purchaseCount);
          expect(lottos.length).toBe(purchaseCount);
        }
      },
      {
        name: `발행된 로또의 숫자 개수는 ${NUMBER_COUNT}개 이다.`,
        randomValue: [[8, 21, 23, 41, 42, 43]],
        expectResult: (lottoGenerator) => {
          const lottos = lottoGenerator.generateLottosBycount(1);
          expect(lottos[0].numbers.length).toBe(NUMBER_COUNT);
        }
      },
      {
        name: '발행된 로또의 숫자들은 오름차순으로 정렬 되어있다.',
        randomValue: [[21, 8, 43, 42, 23, 41]],
        expectResult: (lottoGenerator) => {
          const lottos = lottoGenerator.generateLottosBycount(1);
          expect(lottos[0].numbers).toStrictEqual([8, 21, 23, 41, 42, 43]);
        }
      }
    ])(`$name`, ({ randomValue, expectResult }) => {
      mockRandoms(randomValue);

      const lottoGenerator = new LottoGenerator(NUMBER_COUNT, lottoNumberRange);
      expectResult(lottoGenerator);
    });
});
import Lottos from '../src/Lottos.js';

describe('Lotts 클래스 테스트', () => {
  test('getLottos 테스트', () => {
    expect(() => {
      const lottos = new Lottos();
      lottos.lottoAmount = 2;
      const lottosArr = lottos.getLottos();

      lottosArr.forEach((lotto) => {
        //6개의 숫자인지 확인
        expect(lotto).toHaveLength(6);

        //6개의 숫자가 중복 없는지 확인
        const uniqueNumber = new Set(lotto);
        expect(uniqueNumber.size).toBe(6);

        //오름차순으로 정렬되어 있는지 확인
        for (let i = 0; i < lotto.length; i++) {
          expect(lotto[i - 1]).toBeLessThanOrEqual(lotto[i]);
        }
      });
    });
  });
});

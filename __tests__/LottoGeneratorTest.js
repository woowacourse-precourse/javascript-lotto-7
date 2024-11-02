import LottoGenerator from '../src/model/LottoGenerator';

describe('LottoGenerator 클래스', () => {
  test('generateSingleLotto는 1부터 45 사이의 중복 없는 6개의 숫자를 오름차순으로 반환한다', () => {
    const lotto = LottoGenerator.generateSingleLotto();

    // 6개의 숫자 반환
    expect(lotto.length).toBe(6);

    // 숫자가 1부터 45 사이에 있는지 확인
    lotto.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });

    // 중복이 없는지 확인
    const uniqueNumbers = new Set(lotto);
    expect(uniqueNumbers.size).toBe(6);
  });

  test('generateMultipleLottos는 지정된 개수만큼의 로또 배열을 생성한다', () => {
    const count = 5;
    const lottos = LottoGenerator.generateMultipleLottos(count);

    // 지정된 개수만큼 생성되었는지 확인
    expect(lottos.length).toBe(count);

    // 각 로또가 6개의 숫자를 가지고 있는지 확인
    lottos.forEach((lotto) => {
      expect(lotto.length).toBe(6);

      // 1부터 45 사이의 숫자 여부 확인
      lotto.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });

      // 중복이 없는지 확인
      const uniqueNumbers = new Set(lotto);
      expect(uniqueNumbers.size).toBe(6);
    });
  });
});

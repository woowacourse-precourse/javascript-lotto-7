import LottoPocket from '../src/model/LottoPocket.js';
import Lotto from '../src/model/Lotto.js';

describe('LottoPocket 클래스 테스트', () => {
  test.each([
    [
      [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 5, 6])],
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
      ],
    ],
    [
      [new Lotto([2, 5, 10, 12, 32, 45]), new Lotto([1, 2, 3, 4, 5, 6])],
      [
        [2, 5, 10, 12, 32, 45],
        [1, 2, 3, 4, 5, 6],
      ],
    ],
  ])('유효한 로또들을 받으면 로또들의 번호를 보여줄 수 있다.', (lottos, answer) => {
    const lottoPocket = new LottoPocket(lottos);

    const lottoNumbers = lottoPocket.showLottos();

    expect(lottoNumbers).toMatchObject(answer);
  });
});

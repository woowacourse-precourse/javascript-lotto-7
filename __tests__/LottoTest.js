import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test.each([
    { numbers: [1, 2, 3, 4, 5, 6, 7], description: '로또 번호의 개수가 6개가 넘어가면' },
    { numbers: [1, 2, 3, 4, 5, 5], description: '로또 번호에 중복된 숫자가 있으면' },
    { numbers: [1, 2, 3, 4, 5], description: '로또 번호의 개수가 6개보다 적으면' },
    { numbers: [1, 2, 3, 4, 5, 55], description: '로또 번호에 1~45 범위를 벗어나는 숫자가 있으면' },
  ])('$description 예외가 발생한다.', ({ numbers }) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

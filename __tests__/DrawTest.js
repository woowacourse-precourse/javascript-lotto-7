import Draw from '../src/Components/Draw';

describe('로또 뽑기 클래스 테스트', () => {
  test('1000원 단위가 아닌 금액을 입력하면 예외가 발생한다.', () => {
    expect(() => new Draw(Number('1000j'))).toThrow('[ERROR]');
  });
});

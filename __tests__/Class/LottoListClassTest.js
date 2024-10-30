import LottoList from "../../src/Class/LottoList.js";

describe('로또 리스트 클래스 테스트', () => {
  test.each([
    [1000, 1],
    [9000, 9],
    [20000, 20],
  ])('유효한 구매액 ( %d )이 입력 되었을때 배열의 길이가 ( %d )인 배열을 반환', 
    (purchase, lottoLength) => {
    // given
    const userPurchase = purchase;

    // when
    const lottos = new LottoList(userPurchase);
    const lottoList = lottos.lottoList;
    const lottoCount = lottos.purchase;

    // then
    expect(lottoList.length).toBe(lottoLength);
    expect(lottoCount).toBe(lottoLength);
  })
});
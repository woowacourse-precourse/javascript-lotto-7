import processLottoList from "../../src/process/processLottoList";

describe('로또 구매 리스트 통합 기능 테스트', () => {
  test.each([
    [1000, 1],
    [9000, 9],
    [20000, 20],
    [45000, 45],
  ])('유효한 입력값 ( %d ) 이 입력 되었을때 %d 길이의 배열과 구매횟수를 반환',
    (purchase, result) => {
      // given
      const userPurchase = purchase;
      
      // when
      const LOTTO_LIST = processLottoList(userPurchase);

      // then
      expect(LOTTO_LIST.length).toBe(result);
    }
  );
});
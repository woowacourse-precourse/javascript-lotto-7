import { PickUp } from "../src/Pickup";

describe("Pickup Test", () => {
  const p1 = new PickUp([1, 18, 21, 22, 34, 45], 7);
  test("생성자 테스트", () => {
    expect(p1.getJackpot()).toStrictEqual([1, 18, 21, 22, 34, 45]);
    expect(p1.getBonus()).toBe(7);
  });

  test("pick() 테스트", () => {
    p1.pick();
    expect(p1.getLottoArrays()[0].getNumbers()).toStrictEqual([
      expect.any(Number),
      expect.any(Number),
      expect.any(Number),
      expect.any(Number),
      expect.any(Number),
      expect.any(Number),
    ]);
  });

  test("checkJackpot() 테스트", () => {
    expect(p1.checkJackpot()).toEqual({
      "당첨 없음": expect.any(Number),
      "3개 일치": expect.any(Number),
      "4개 일치": expect.any(Number),
      "5개 일치": expect.any(Number),
      "5개 일치 + 보너스": expect.any(Number),
      "6개 일치": expect.any(Number),
    });
  });
});

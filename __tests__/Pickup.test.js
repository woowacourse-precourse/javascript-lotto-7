import { PickUp } from "../src/PickUp";

const TEST_OBJECT_CHECKJACKPOT = {
  "당첨 없음": expect.any(Number),
  "3개 일치": expect.any(Number),
  "4개 일치": expect.any(Number),
  "5개 일치": expect.any(Number),
  "5개 일치, 보너스 볼 일치": expect.any(Number),
  "6개 일치": expect.any(Number),
};

describe("Pickup Test", () => {
  const p1 = new PickUp();
  p1.setJackpot([1, 18, 21, 22, 34, 45]);
  p1.setBonus(7);
  test("setter 테스트", () => {
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
    expect(p1.checkJackpot()).toEqual(TEST_OBJECT_CHECKJACKPOT);
  });
});

// __tests__/LottoGameLogicTest.js
import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("로또 게임 로직 테스트", () => {
 beforeEach(() => {
   jest.restoreAllMocks();
 });

 const getLogSpy = () => {
   const logSpy = jest.spyOn(MissionUtils.Console, "print");
   logSpy.mockClear();
   return logSpy;
 };

 const mockRandomNumbers = (numbers) => {
   MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
   numbers.forEach((number) => {
     MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(number);
   });
 };

 const mockInput = (inputs) => {
   MissionUtils.Console.readLineAsync = jest.fn();
   inputs.forEach((input) => {
     MissionUtils.Console.readLineAsync.mockImplementationOnce(() => 
       Promise.resolve(input)
     );
   });
 };

 test("1등 당첨 케이스", async () => {
   // given
   const logSpy = getLogSpy();
   mockRandomNumbers([[1, 2, 3, 4, 5, 6]]);  // 구매한 로또 번호
   mockInput(["1000", "1,2,3,4,5,6", "7"]);  // 입력값

   // when
   const app = new App();
   await app.run();

   // then
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("6개 일치 (2,000,000,000원) - 1개"));
 });

 test("2등 당첨 케이스 (보너스 번호 포함)", async () => {
   // given
   const logSpy = getLogSpy();
   mockRandomNumbers([[1, 2, 3, 4, 5, 7]]);  // 5개 일치 + 보너스
   mockInput(["1000", "1,2,3,4,5,6", "7"]);

   // when
   const app = new App();
   await app.run();

   // then
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"));
 });

 test("3-5등 당첨 케이스", async () => {
   // given
   const logSpy = getLogSpy();
   mockRandomNumbers([
     [1, 2, 3, 4, 5, 10],  // 5개 일치 (3등)
     [1, 2, 3, 4, 10, 11], // 4개 일치 (4등)
     [1, 2, 3, 10, 11, 12] // 3개 일치 (5등)
   ]);
   mockInput(["3000", "1,2,3,4,5,6", "7"]);

   // when
   const app = new App();
   await app.run();

   // then
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치 (1,500,000원) - 1개"));
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("4개 일치 (50,000원) - 1개"));
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개 일치 (5,000원) - 1개"));
 });

 test("미당첨 케이스", async () => {
   // given
   const logSpy = getLogSpy();
   mockRandomNumbers([[40, 41, 42, 43, 44, 45]]);  // 전부 불일치
   mockInput(["1000", "1,2,3,4,5,6", "7"]);

   // when
   const app = new App();
   await app.run();

   // then
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개 일치 (5,000원) - 0개"));
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("4개 일치 (50,000원) - 0개"));
   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치 (1,500,000원) - 0개"));
 });

 test("수익률은 소수점 둘째 자리에서 반올림된다", async () => {
   // given
   const logSpy = getLogSpy();
   mockRandomNumbers([
     [1, 2, 3, 4, 5, 6]  // 6개 일치 (2,000,000,000원)
   ]);
   mockInput(["1000", "1,2,3,4,5,6", "7"]);

   // when
   const app = new App();
   await app.run();

   // then
   // 구매금액: 1,000원, 당첨금: 2,000,000,000원, 수익률: 200,000,000.0%
   expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/총 수익률은 \d+\.0%입니다.$/));
 });
});
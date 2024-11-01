import compareLotto from "../src/models/compareLotto.js";

describe("compareLotto 테스트",()=>{
    test("교집합, 차집합 잘 구하는 지 테스트",()=>{
        const ticket = [3, 5, 1, 40, 19, 31];
        const winningNums = [1, 2, 3, 4, 5, 6];
        const { winnings, difference } = compareLotto(ticket, winningNums);
        expect(winnings).toEqual(3);
        expect(difference).toEqual([40, 19, 31]);
    })
})
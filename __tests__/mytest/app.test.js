// _tests_/mytest/app.test.js
import App from '../../src/App.js'; // App 클래스의 경로에 맞게 수정
import { Console,  jest, describe, beforeEach, test, expect } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
    Console: {
        readLine: jest.fn((message, callback) => {
            callback('1000'); // 구입 금액에 대한 테스트용 입력값
        }),
        print: jest.fn(),
        close: jest.fn(),
    },
}));

describe('App 클래스', () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    // 1. 구입 금액 입력 요청 테스트
    test('구입 금액 입력 요청', async () => {
        await app.requestPurchaseAmount();
        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining('개를 구매했습니다.'));
    });

    // 2. 당첨 번호 유효성 검사 테스트
    test('당첨 번호 유효성 검사', async () => {
        const input = '1,2,3,4,5,6';

        // 당첨 번호 입력 모킹
        Console.readLine.mockImplementationOnce((message, callback) => {
            callback(input); // 테스트용 당첨 번호 입력
        });

        await app.getWinningNumbers(); // 당첨 번호 입력 메서드 호출

        expect(Console.print).toHaveBeenCalledWith(`입력된 당첨 번호: ${input}`);
    });

    // 3. 파라미터화된 테스트를 통한 당첨 번호 유효성 검사
    describe('당첨 번호 유효성 검사', () => {
        test.each([
            ['1,2,3,4,5,6', true],
            ['1,2,3,4,5,5', false],
            ['1,2,3,4,5', false],
            ['-1,2,3,4,5,6', false],
            ['1,2,3,46,5,6', false],
        ])('입력값 %s에 대한 유효성 검사 결과: %p', (input, expected) => {
            if (expected) {
                expect(() => app.validateWinningNumbers(input)).not.toThrow();
            } else {
                expect(() => app.validateWinningNumbers(input)).toThrow();
            }
        });
    });

    // 4. 보너스 번호 입력 요청 테스트
    test('보너스 번호 입력 요청', async () => {
        const bonusInput = '7';

        // 당첨 번호 입력 모킹
        Console.readLine.mockImplementationOnce((message, callback) => {
            callback('1,2,3,4,5,6'); // 당첨 번호 입력
        });
        await app.getWinningNumbers(); // 당첨 번호 입력

        // 보너스 번호 입력 모킹
        Console.readLine.mockImplementationOnce((message, callback) => {
            callback(bonusInput); // 테스트용 보너스 번호 입력
        });

        await app.getBonusNumber(app.winningNumbers);
        expect(Console.print).toHaveBeenCalledWith(`입력된 보너스 번호: ${bonusInput}`);
    });

    // 5. 테스트를 통한 당첨 결과 출력
    test('당첨 결과 출력', async () => {
        await app.requestPurchaseAmount(); // 먼저 구입 금액 입력
        Console.readLine.mockImplementationOnce((message, callback) => {
            callback('1,2,3,4,5,6'); // 당첨 번호 입력
        });
        await app.getWinningNumbers(); // 당첨 번호 입력
        Console.readLine.mockImplementationOnce((message, callback) => {
            callback('7'); // 보너스 번호 입력
        });
        await app.getBonusNumber(app.winningNumbers); // 보너스 번호 입력

        app.calculateResults(); // 당첨 결과 계산
        app.printResults(); // 결과 출력

        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining('당첨 통계'));
    });
});

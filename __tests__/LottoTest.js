import Lotto from "../src/Lotto";
import { validateMoney, validateWinningNumbers, validateBonusNumber } from '../src/Validator';
import { MESSAGES } from '../src/Constants';

describe("로또 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    // TODO: 테스트가 통과하도록 프로덕션 코드 구현
    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    describe('구입 금액 검증', () => {
        test('1000원 단위가 아닌 금액 입력 시 예외 발생', () => {
            expect(() => {
                validateMoney('1500');
            }).toThrow(MESSAGES.MONEY_NOT_DIVISIBLE_BY_THOUSAND);
        });
    
        test('숫자가 아닌 금액 입력 시 예외 발생', () => {
            expect(() => {
                validateMoney('digest');
            }).toThrow(MESSAGES.ERROR.NOT_A_NUMBER);
        });
    
        test('음수 금액 입력 시 예외 발생', () => {
            expect(() => {
                validateMoney('-5000');
            }).toThrow(MESSAGES.ERROR.NEGATIVE_AMOUNT);
        });
    
        test('10만원 초과 금액 입력 시 예외 발생', () => {
            expect(() => {
                validateMoney('110000');
            }).toThrow(MESSAGES.ERROR.CANNOT_BUY_OVER_LIMIT);
        });
    });
    
    describe('로또 발행 검증', () => {
        test('구입 금액에 맞게 로또를 발행한다', () => {
            const money = '8000';
            const issuedLottos = Lotto.issueLottos(money);
            expect(issuedLottos.length).toBe(8);
        });
    
        test('발행된 로또의 각 번호는 6개여야 한다', () => {
            const money = '3000';
            const issuedLottos = Lotto.issueLottos(money);
            issuedLottos.forEach(lotto => {
                expect(lotto.length).toBe(6);
            });
        });
    
        test('로또 번호는 중복되지 않아야 한다', () => {
            const money = '3000';
            const issuedLottos = Lotto.issueLottos(money);
            issuedLottos.forEach(lotto => {
                const uniqueNumbers = new Set(lotto);
                expect(uniqueNumbers.size).toBe(6);
            });
        });
    });
    
    describe('당첨 번호 검증', () => {
        test("정상적인 당첨 번호로 인스턴스 생성 시 예외가 발생하지 않는다.", () => {
            expect(() => {
                new Lotto([1, 2, 3, 4, 5, 6]);
            }).not.toThrow();
        });
    
        test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            expect(() => {
                validateBonusNumber([1, 2, 3, 4, 5, 6], '6');
            }).toThrow("[ERROR]");
        });
    });
    
    describe('당첨 내역 계산 및 수익률 계산 검증', () => {
        test('로또 당첨 내역 계산이 정확해야 한다', () => {
            const winningNumbers = [1, 2, 3, 4, 5, 6];
            const bonusNumber = 7;
            const lotto = new Lotto(winningNumbers);
            lotto.getBonusNumber(bonusNumber);
            lotto.getIssuedLottos([
                [1, 2, 3, 4, 5, 6], // 6개 일치
                [1, 2, 3, 4, 5, 7], // 5개 + 보너스 일치
                [1, 2, 3, 4, 5, 8]  // 5개 일치
            ]);
    
            const result = lotto.calculateResult();
            expect(result[6]).toBe(1);
            expect(result['5+bonus']).toBe(1);
            expect(result[5]).toBe(1);
        });
    
        test('수익률 계산이 정확해야 한다', () => {
            const result = { 3: 1, 4: 0, 5: 0, '5+bonus': 0, 6: 1 };
            const userMoney = '8000';
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            const profitRate = lotto.calculateProfitRate(result, userMoney);
            expect(parseFloat(profitRate)).toBeGreaterThan(20000000.0);
        });
    });
});

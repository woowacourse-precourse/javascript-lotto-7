import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoMachine } from '../src/Model/LottoMachine.js';
import { LOTTO_PRICE } from '../src/constants/numbers.js';
import Lotto from '../src/Model/Lotto.js';

describe('로또 클래스 테스트', () => {
	test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 6, 7]);
		}).toThrow('[ERROR]');
	});

	// TODO: 테스트가 통과하도록 프로덕션 코드 구현
	test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 5]);
		}).toThrow('[ERROR]');
	});

	// TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

describe('로또 머신 테스트', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('구입 금액에 맞는 개수만큼 로또를 생성한다', () => {
		// given
		const money = 5000;
		const expectedLottoCount = money / LOTTO_PRICE;
		const mockNumbers = [1, 2, 3, 4, 5, 6];
		MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
		MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(mockNumbers);
		const lottoMachine = new LottoMachine();

		// when
		lottoMachine.buyLotto(money);

		// then
		expect(lottoMachine.lottos).toHaveLength(expectedLottoCount);
		expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(
			expectedLottoCount
		);
	});

	test('생성된 로또 번호가 오름차순으로 정렬되어야 한다', () => {
		// given
		const money = LOTTO_PRICE;
		const unsortedNumbers = [6, 2, 4, 1, 5, 3];
		const sortedNumbers = [1, 2, 3, 4, 5, 6];
		MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
		MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(
			unsortedNumbers
		);
		const lottoMachine = new LottoMachine();

		// when
		lottoMachine.buyLotto(money);

		// then
		expect(lottoMachine.lottos[0].lottoNumbers).toEqual(sortedNumbers);
	});

	test('여러 장의 로또를 구매할 때마다 새로운 번호가 생성되어야 한다', () => {
		// given
		const money = LOTTO_PRICE * 3;
		const firstNumbers = [1, 2, 3, 4, 5, 6];
		const secondNumbers = [7, 8, 9, 10, 11, 12];
		const thirdNumbers = [13, 14, 15, 16, 17, 18];

		MissionUtils.Random.pickUniqueNumbersInRange = jest
			.fn()
			.mockReturnValueOnce(firstNumbers)
			.mockReturnValueOnce(secondNumbers)
			.mockReturnValueOnce(thirdNumbers);

		const lottoMachine = new LottoMachine();

		// when
		lottoMachine.buyLotto(money);

		// then
		expect(lottoMachine.lottos[0].lottoNumbers).toEqual(firstNumbers);
		expect(lottoMachine.lottos[1].lottoNumbers).toEqual(secondNumbers);
		expect(lottoMachine.lottos[2].lottoNumbers).toEqual(thirdNumbers);
		expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(
			3
		);
	});

	test('로또 구매 전에는 로또 배열이 비어있어야 한다', () => {
		// given
		const lottoMachine = new LottoMachine();

		// then
		expect(lottoMachine.lottos).toHaveLength(0);
	});
});

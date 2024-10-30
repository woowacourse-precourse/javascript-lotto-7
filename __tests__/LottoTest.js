import CostManager from '../src/CostManager.js';
import { Console,Random } from '@woowacourse/mission-utils';
import LottoGenerator from '../src/LottoGenerator.js';
jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(), // readLineAsync를 모킹
    print: jest.fn(),
  },
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe("코스트 메니저 클래스 테스트", () => {
  let costManager;

  beforeEach(() => {
    costManager = new CostManager(); // 각 테스트 전에 새로운 인스턴스를 생성 
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks(); // 모든 모킹을 초기화
  });


  test("입력값이 1000의 배수일 때.", async () => {
    Console.readLineAsync.mockResolvedValue('1000'); 

    const cost = await costManager.getLottoCountFromCost(); // 비동기 호출로 await 사용
    expect(cost).toBe(1); // 실제로 숫자형으로 비교
  });


  test("입력값이 1000의 배수가 아닐 때", async () => {
    Console.readLineAsync.mockResolvedValue('1500')
    await expect(costManager.getLottoCountFromCost()).rejects.toThrow('[Error] 천원단위로만 입력할 수 있습니다.');
  });

  test('generateLottos는 lottoCount만큼의 정렬된 로또 번호를 출력한다.', () => {
    let lottoGenerator = new LottoGenerator()
    const lottoCount = 2;

    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([5, 3, 12, 45, 20, 8])
      .mockReturnValueOnce([7, 15, 2, 30, 41, 22]);

    lottoGenerator.generateLottos(lottoCount);

    expect(Console.print).toHaveBeenCalledTimes(lottoCount);
    expect(Console.print).toHaveBeenNthCalledWith(1, [3, 5, 8, 12, 20, 45]);
    expect(Console.print).toHaveBeenNthCalledWith(2, [2, 7, 15, 22, 30, 41]);
  });
  




});



/*describe("로또 클래스 테스트", () => {
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

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});*/

import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../src/models/LottoGame';
import Lotto from '../src/models/Lotto';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoGame', () => {
  let lottoGame;
  let mockLottoMachine;

  beforeEach(() => {
    mockLottoMachine = {
      generateLottos: jest.fn(),
    };
    lottoGame = new LottoGame(mockLottoMachine);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('getLottos()', () => {
    // given
    const mockLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];
    const expectedLottos = mockLottos.map(numbers => new Lotto(numbers));

    // when
    lottoGame.setLottos(expectedLottos);

    // then
    expect(lottoGame.getLottos()).toEqual(expectedLottos);
  });

  test('setLottos()', () => {
    // given
    const mockLottos = [new Lotto([1, 2, 3, 4, 5, 6])];

    // when
    lottoGame.setLottos(mockLottos);

    // then
    expect(lottoGame.getLottos()).toEqual(mockLottos);
  });

  test('displayLottos()', () => {
    // given
    const mockLottoNumbers = [
      [6, 28, 31, 35, 37, 38],
      [4, 5, 16, 18, 19, 32],
      [4, 7, 34, 38, 39, 40],
      [4, 6, 9, 15, 31, 45],
      [2, 15, 28, 35, 41, 42],
    ];

    const mockLottos = mockLottoNumbers.map(
      lottoNumer => new Lotto(lottoNumer),
    );
    lottoGame.setLottos(mockLottos);

    const logSpy = getLogSpy();

    // when
    lottoGame.displayLottos();

    // then
    const logs = [
      '5개를 구매했습니다.',
      '[6, 28, 31, 35, 37, 38]',
      '[4, 5, 16, 18, 19, 32]',
      '[4, 7, 34, 38, 39, 40]',
      '[4, 6, 9, 15, 31, 45]',
      '[2, 15, 28, 35, 41, 42]',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

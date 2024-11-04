import LottoList from '../src/LottoList.js';
import { generateLottoNumbers } from '../src/utils/generateLottoNumbers.js';

jest.mock('../src/utils/generateLottoNumbers.js', () => ({
  generateLottoNumbers: jest.fn(),
}));

describe('LottoList 클래스 테스트', () => {
  beforeEach(() => {
    generateLottoNumbers.mockClear();
  });

  test('LottoList가 주어진 수량의 로또 티켓을 생성하는지 확인', () => {
    const mockLottoNumbers = [1, 2, 3, 4, 5, 6];
    generateLottoNumbers.mockReturnValue(mockLottoNumbers);

    const quantity = 3;
    const lottoList = new LottoList(quantity);
    const tickets = lottoList.getTickets();

    expect(tickets.length).toBe(quantity);
    tickets.forEach(ticket => expect(ticket).toStrictEqual(mockLottoNumbers));
  });
});

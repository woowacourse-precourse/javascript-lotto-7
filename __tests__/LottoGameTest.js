import INPUT_PROMPT from '../src/constants/inputConstant';
import LottoGame from '../src/models/LottoGame';
import InputHandler from '../src/utils/InputHandler';

describe('LottoGame', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test('로또 구입 금액 입력 프롬프트가 표시된다', async () => {
    // Given
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(); // console.log를 모킹하여 실제로 출력되지 않도록 합니다.
    InputHandler.getInput.mockResolvedValue('14000'); // getInput 메서드가 호출될 때 모킹한 값을 반환하도록 설정합니다.

    // When
    await lottoGame.play(); // play 메서드를 호출하여 입력을 받습니다.

    // Then
    expect(consoleLogSpy).toHaveBeenCalledWith(INPUT_PROMPT.PURCHASE_PRICE); // 입력 프롬프트가 올바르게 출력되었는지 확인합니다.

    consoleLogSpy.mockRestore(); // 모킹한 console.log를 원래 상태로 복원합니다.
  });
});

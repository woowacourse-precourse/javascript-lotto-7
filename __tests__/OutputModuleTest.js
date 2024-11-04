import OutputModules from '../src/views/OutputModules';
import { getLogSpy } from './ApplicationTest';

describe('OutputModule Test', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test('printMessage : 전달 받은 메세지를 출력한다.', () => {
    const messages = 'hello';

    OutputModules.printMessage(messages);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(messages));
  });
});

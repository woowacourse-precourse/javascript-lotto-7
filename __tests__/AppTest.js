import App from '../src/App.js';
import Controller from '../src/controllers/Controller.js';
import InputHandler from '../src/handlers/InputHandler.js';

jest.mock('../src/handlers/InputHandler');
jest.mock('../src/controllers/Controller');

describe('App 테스트', () => {
  test('run 메서드가 InputHandler와 Controller 인스턴스를 한 번씩 생성하고 start를 호출하는지 테스트', async () => {
    const app = new App();

    const mockControllerInstance = {
      start: jest.fn(),
    };
    Controller.mockImplementation(() => mockControllerInstance);

    await app.run();

    expect(InputHandler).toHaveBeenCalledTimes(1);
    expect(Controller).toHaveBeenCalledTimes(1);
    expect(mockControllerInstance.start).toHaveBeenCalledTimes(1);
  });
});

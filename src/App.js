import GetInput from './input/GetInput.js';

class App {
  async run() {
    const input = await GetInput.print();
    console.log(input);
  }
}

export default App;

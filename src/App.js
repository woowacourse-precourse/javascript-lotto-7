import { Simulator } from './Simulator.js';
import {Validator} from './Validator.js';
import {Publisher} from './Publisher.js';

class App {
  async run() {
    const validator = new Validator();
    const publisher = new Publisher();
    const simulator = new Simulator(validator, publisher);
    await simulator.simulate();
  }
}

export default App;

// @ts-check
import Module from '../lib/Module.js';

import LotteryMachineModel from './lottery-machine.model.js';
import LotteryMachineView from './lottery-machine.view.js';
import LotteryMachineController from './lottery-machine.controller.js';
import LotteryMachineService from './lottery-machine.service.js';
import ValidationContext from '../validation/validation.context.js';

const LotteryMachineModule = new Module({
  models: [LotteryMachineModel],
  views: [LotteryMachineView],
  controllers: [LotteryMachineController],
  services: [LotteryMachineService],
  providers: [ValidationContext],
});

export default LotteryMachineModule;

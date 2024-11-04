import { Console } from '@woowacourse/mission-utils';

const errorHandler = async (func) => {
  try {
    await func();
  } catch (error) {
    Console.print(error.message);
    await errorHandler(func);
  }
};

export default errorHandler;

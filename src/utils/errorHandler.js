import { Console } from '@woowacourse/mission-utils';

const errorHandler = async (func) => {
  try {
    await func();
  } catch (error) {
    Console.print(error.message);
    errorHandler(func);
  }
};

export default errorHandler;

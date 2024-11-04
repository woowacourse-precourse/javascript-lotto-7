export default async (getInput, parser, modelInvoker, errorLog) =>  {
  while(true) {
    try {
      const input = await getInput();
      return modelInvoker(parser(input));
    } catch(error) {
      errorLog(error.message);
    }
  }
};

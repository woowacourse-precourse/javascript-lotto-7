const runExceptionTestPipe = (runClass, input, errorMessage) => {
  // given: 매개변수

  // when & then
  expect(() => new runClass(input)).toThrow(errorMessage);
}

export default runExceptionTestPipe;
// ! 예외 처리
export const throughErrorMessage = (message) => {
  throw new Error(`[ERROR] ${message}`);
};

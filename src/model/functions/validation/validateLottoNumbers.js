export const validateLottoNumbers = (numbers) => {
  if (numbers.length !== 6) {
    console.error('[ERROR] 로또 번호는 6개여야 합니다.');
    throw new Error('로또 번호는 6개여야 합니다.');
  }
};

const utils = {
  convertNumberFormat(format, options) {
    const numberFormat = new Intl.NumberFormat('ko-KR', options).format(format);

    return numberFormat;
  },
};

export default utils;

class Validator {
  static isNotNumber(value) {
    if (isNaN(value)) {
      return true;
    }
    return false;
  }

  static containNotNumber(values) {
    values.forEach((value) => {
      if (Validator.isNaN(value)) {
        return true;
      }
    });

    return false;
  }
}

export default Validator;

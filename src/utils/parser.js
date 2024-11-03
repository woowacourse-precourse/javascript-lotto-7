const divideThousands = (element) => {
    return element / 1000;
}

const separateString = (element, separator) => {
  return element.split(separator);
}

const parser = {
    divideThousands,
    separateString,
}

export default parser;
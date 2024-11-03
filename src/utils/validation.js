const isBlank = input => input === '';

const isNumber = input => !Number.isNaN(Number(input));

const isThousandUnit = input => Number(input) % 1000 === 0;

export { isBlank, isNumber, isThousandUnit };

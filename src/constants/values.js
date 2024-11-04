const VALUES = {
  price: 1000,
  format: { notNumber: /(?!^[+-])[^\d]/ },
  index: { detailValue: 1 },
  range: { start: 1, end: 45, size: 6 },
  separator: ',',
  division: '\n',
  space: ' ',
  squareBrackets: { open: '[', close: ']' },
};

export default VALUES;

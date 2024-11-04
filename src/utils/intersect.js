
export const intersect = (setA, setB) => {
  return Array.from(setA, (value)=> setB.has(value));
}
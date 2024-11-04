
export default function intersect (iterator, target) {
  const targetSet = new Set(target);
  return [...iterator].filter((value) => targetSet.has(value));
};

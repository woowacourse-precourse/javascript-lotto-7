export function printResult(counts) {
  console.log(`3개 일치(5,000원) - ${counts[3]}`);
  console.log(`4개 일치(50,000원) - ${counts[4]}`);
  console.log(`5개 일치(1,500,000원) - ${counts[5]}`);
  console.log(`5개 일치(30,000,000원) - ${counts["5_bonus"]}`);
  console.log(`6개 일치(2,000,000,000원) - ${counts[6]}`);
}

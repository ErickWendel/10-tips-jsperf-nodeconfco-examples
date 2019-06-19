let aMilionEmployees = [];
for (let i = 0; i < 1000000; i++) {
  aMilionEmployees.push({ salary: i });
}

console.time('wrong-loops');
const result = aMilionEmployees //Inspect all collection
  .map(item => item.salary)
  .filter(salary => salary > 0)
  .reduce((prev, next) => prev + next, 0);
console.timeEnd('wrong-loops');

console.time('right-loops');
let sum = 0;
for (item of aMilionEmployees) {
  // 1M
  if (item.salary < 0) continue;
  sum += item.salary;
}
console.timeEnd('right-loops');

//10x Faster 

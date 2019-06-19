const findAllPeople = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ name: 'John' }, { name: 'Alexa' }]), 3000);
  });
};
const findAllCars = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ name: 'fusca' }, { name: 'BMW' }]), 3000);
  });
};

const runSequence = async () => {
  const people = await findAllPeople();
  const cars = await findAllCars();
  return { people, cars };
};

const runParallel = async () => {
  const r1 = findAllPeople();
  const r2 = findAllCars();
  return Promise.all([r1, r2]);
};
(async () => {
  console.time('sequence');
  await runSequence();
  console.timeEnd('sequence');

  console.time('with-no-blocking');
  await runParallel();
  console.timeEnd('with-no-blocking');
})();

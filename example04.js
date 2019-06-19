const db = {
  heroes: {
    findOne({ _id }) {
      return new Promise(resolve =>
        setTimeout(() => resolve({ name: `Flash-${_id}` }), 2000),
      );
    },
  },
};

let tenHeroes = [];
for (let i = 0; i < 10; i++) {
  tenHeroes.push({ _id: i });
}

(async () => {
  console.time('wrong-async-resolve');
  const heroes = [];
  for ({ _id } of tenHeroes) {
    const acc = await db.heroes.findOne({ _id });
    heroes.push(acc);
  }
  console.log(heroes);
  console.timeEnd('wrong-async-resolve');
})();

(async () => {
  console.time('right-async-resolve');
  const promises = [];
  for ({ _id } of tenHeroes) {
    const acc = db.heroes.findOne({ _id });
    promises.push(acc);
  }
  const heroes = await Promise.all(promises);
  console.timeEnd('right-async-resolve');
})();

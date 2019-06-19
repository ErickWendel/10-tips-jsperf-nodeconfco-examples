const db = {
  heroes: {
    find({ query, projection, skip, limit }) {
      return new Promise(resolve =>
        setTimeout(() => resolve({ name: `Flash-${_id}` }), 2000),
      );
    },
  },
};

(async () => {
  const heroes = await db.heroes.findOne({ 
      query: { salary: { $gte: 0} },
      projection: { name: 1, salary: 1},
      skip: 10,
      limit: 100 
  });
  console.log(heroes);
})();


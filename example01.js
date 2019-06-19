const db = {
  heroes: {
    findOne(p1, p2) {
      return Promise.resolve({ name: 'Flash' });
    },
    findPhone(name) {
      return Promise.reject({ number: '12312300' });
    },
  },
};

const getItems = (name, callback) => {
  db.heroes
    .findOne(name)
    .then(async result => {
      const phone = await db.heroes.findPhone(result.name);
      callback(null, { ...result, ...phone });
    })
    .catch(callback);
};

getItems('Flash', (error, res) => {
  if (error) return console.log('error!', error);

  console.log('result', res);
});



const express = require('express');
const routes = express.Router();

let db = [
  { '1': { name: 'John Doe', age: '12' } },
  { '2': { name: 'Fulano de Tal', age: '34' } },
  { '3': { name: 'Webert Richards', age: '69' } }
];
console.log('db:', db);

routes.get('/', (req, res) => {
  console.log('[get] res:', res.json(db));
  return res.json(db);
});

routes.post('/add', (req, res) => {
  const body = req.body;
  console.log('[post] body:', body);

  if (!body) {
    return res.status(400).end();
  }

  db.push(body);

  return res.json(body);
});

routes.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log('[delete] id:', id);

  let newDB = db.filter((item) => {
    if (!item[id]) {
      return item;
    }
  });

  db = newDB;

  res.send(db);
});

routes.put('/edit/:id', (req, res) => {
  const body = req.body;
  console.log('[put] body:', body);

  const id = req.params.id - 1;
  console.log('[put] id:', id);

  if (!body) {
    return res.status(400).end();
  }

  if (!db[id]) {
    return res.status(404).end();
  }

  db[id] = { [id + 1]: body };

  return res.json(db[id]);
});

module.exports = routes;
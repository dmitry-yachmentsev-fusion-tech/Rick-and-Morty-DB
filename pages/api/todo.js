const pgp = require('pg-promise')({
  noWarnings: true,
});

const db = pgp(`postgres://postgres:password@localhost:5432/rickandmorty`);

export default async (req, res) => {
  if (req.method === 'POST') {
    await db.none(pgp.helpers.insert(req.body, null, 'notes'));
    res.status(201).json({ info: "it's ok" });
  } else if(req.method === 'GET') {
    const results = await db.manyOrNone('SELECT * FROM notes')
    res.json({ results });
  } else if (req.method === 'PATCH') {
    const condition = pgp.as.format(' WHERE id = ${id}', req.body);
    const results = await db.none(pgp.helpers.update(req.body, null, 'notes') + condition)
    res.json({ results });
  } else if (req.method === 'DELETE') {
    const condition = req.body.id ? pgp.as.format(' WHERE id = ${id}', req.body) : '';
    const result = await db.oneOrNone('DELETE FROM notes' + condition)
    res.json({ result });
  }
};
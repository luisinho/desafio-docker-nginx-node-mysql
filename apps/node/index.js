const express = require('express');
const { queryPromise } = require('./queryPromise');

async function createApp() {

    const app = express();

    const values = [['Luis']];

    const sqlInsert = `INSERT INTO people(name) VALUES ?`;

    await queryPromise.queryInsert(sqlInsert, values);

    app.get('/', async (req, res) => {

        const sqlSelect = `SELECT * FROM people`;

        const allData = await queryPromise.querySelect(sqlSelect);

        const html = `<h1>Full Cycle Rocks!</h1>\n
      <ul>
        ${allData.map(data => `<li>${data.name}</li>`).join('')}
      </ul>`

        res.send(html);

      });

      return app;
    }

module.exports = createApp;
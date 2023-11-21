const app = require('express')();

app.get('/', (req, res) => {
  res.redirect('/main');
});

app.get('/main', (req, res) => {
    res.send('Hello world!');
});

app.listen(4000);
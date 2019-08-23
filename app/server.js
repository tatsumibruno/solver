const app = require('./index');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Rodando na porta 3000!');
});
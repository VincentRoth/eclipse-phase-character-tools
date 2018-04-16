const $express = require('express');
const app = $express();

const envDefaultServerPort = process.env.PORT;
const serverPort = envDefaultServerPort || 3000;

app.use($express.static('dist'));
app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/dist/index.html`);
})
app.listen(serverPort);
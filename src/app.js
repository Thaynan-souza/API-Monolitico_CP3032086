const express = require('express');
const rotasUsuarios = require('./routes/user.routes');
require('./database/db');

const app = express();

app.use(express.json());
app.use('/users', rotasUsuarios);

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`API rodando na porta ${PORTA}`);
});
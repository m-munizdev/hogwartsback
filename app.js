const express = require('express');
const alunosrouter = require("./src/routes/alunos")
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/alunos', alunosrouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
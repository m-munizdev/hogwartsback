const pool = require("../../config/database");

const createAluno = async (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO Alunos (username, password) VALUES ($1, $2)";
  const values = [username, password];
  console.log(req.body);
  try {
    const result = await pool.query(query, values);
    res.status(201).json({ message: "Aluno incluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createAluno;

const express = require("express");
const router = express.Router();
const createaluno = require("../controllers/alunos");

router.post("/", createaluno);

module.exports = router;

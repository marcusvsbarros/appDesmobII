const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livro', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Schema e Model
const UsuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  telefone: String
});

const Usuario = mongoose.model('Usuarios', UsuarioSchema);

// Rotas

// Listar todos os usuários
app.get("/", async (req, res) => {
  try {
    const users = await Usuario.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuários", error: err.message });
  }
});

// Adicionar novo usuário
app.post("/add", async (req, res) => {
  const { name, email, telefone } = req.body;

  try {
    const novoUsuario = new Usuario({ name, email, telefone });
    await novoUsuario.save();
    res.status(201).json({ status: "adicionado", data: novoUsuario });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao adicionar usuário", error: err.message });
  }
});

// Deletar usuário
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletado = await Usuario.findByIdAndDelete(req.params.id);
    if (!deletado) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json({ status: "deletado" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao deletar usuário", error: err.message });
  }
});

// Atualizar (PUT) - todos os campos
app.put("/put_update/:id", async (req, res) => {
  try {
    const atualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json({ status: "alterado", data: atualizado });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar usuário", error: err.message });
  }
});

// Atualizar (PATCH) - parcialmente
app.patch("/update/:id", async (req, res) => {
  try {
    const resultado = await Usuario.updateOne({ _id: req.params.id }, req.body);
    if (resultado.modifiedCount > 0) {
      res.json({ status: "alterado", data: req.body });
    } else {
      res.status(404).json({ erro: "Usuário não encontrado ou nada alterado" });
    }
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar usuário", error: err.message });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});

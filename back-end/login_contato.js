const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/TodosPorUm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UsuarioSchema = new mongoose.Schema({
  email: { type: String, required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  confereSenha: { type: String, required: true }
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

app.post("/cadastro", async (req, res) => {
  const email = req.body.email;
  const nome = req.body.senha;
  const senha = req.body.senha;
  const confereSenha = req.body.senha;
 
  if(email == null || nome == null || senha == null || confereSenha == null){
    return res.status(400).json({error : "Preenchar todos os campos!!!"});
  }

  const emailExiste = await Usuario.findOne({email : email});

  if(emailExiste){
    return res.status(400).json({error : "O email informado já existe"});
  }

   
  const usuario = new Usuario({
    email: email,
    nome: nome,
    senha: senha,
    confereSenha: confereSenha
  });


  try {
    const newUsuario = await usuario.save();
    res.json({ error: null, msg: "Cadastro ok", UsuarioId: newUsuario._id });
  } catch (error) {}


});

  const mensagensSchema = new mongoose.Schema({ 
    nome: { type: String, required: true },
    email: { type: String},
    telefone: { type: Number},
    assunto: { type: String},
    mensagem: { type: String, required: true }
  });
  
  const mensagem = mongoose.model("mensagens", mensagensSchema);
  
  app.post("/contato", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const assunto = req.body.assunto;
    const mensagem = req.body.mensagem

    if(nome == null || email == null || telefone == null || assunto == null || mensagem == null){
      return res.status(400).json({error : "Preenchar todos os campos!!!"});
    }


  const produtoesporte = new Produtoesporte({
    nome: nome,
    email: email,
    telefone: telefone,
    assunto: assunto,
    mensagem: mensagem
    });
  
  try {
    const newProduto = produtoesporte.save();
    res.json({ error: null, msg: "produtoEsporte OK", UsuarioId: newProduto._id });
  } catch (error) {}


});

app.get("/cadastrousuario", async (req, res) => {
  res.sendFile(__dirname + "/cadastroUsuario.html");
});

app.get("/cadastroProdutos", async (req, res) => {
  res.sendFile(__dirname + "/cadastroProdutos.html");
});

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
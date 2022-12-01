import express from "express";
import cors from "cors";
import * as fs from 'node:fs';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

var data = fs.readFileSync('./Data/data.json');
var meuObjeto = JSON.parse(data);

const usuarios = meuObjeto;

const addUser = async (user) => {
  usuarios.push(user);
  var DadosAtualizados = JSON.stringify(usuarios);
  fs.writeFile("./data/data.json", DadosAtualizados, (err) => {
  if(err){
    throw err;
  }
})
};

app.post("/usuarios/", (req, res) => {
  let user = req.body;
  addUser(user);
  res.status(200).send("Usuário: "+user.email+" - Senha: "+user.password);
});

app.get("/usuarios/:email", (req, res) => {
  usuarios.map((user)=>{
    if(""+user.email === ""+req.params.email){
      res.json(user);
      res.status(200).send("Usuário: "+user.email+" - Senha: "+user.senha);
    }
  });
  res.status(404).send("Usuário não encontrado!");
});

app.listen(port, () => {
  console.log("Servidor está sendo executado na porta: ", port);
});
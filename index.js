/*configurações do servidor */
// carregar o modulo express
const express = require('express')
// executar modulo express
const app = express()
//definir pasta dos arquivos ejs
app.set ('views','./')
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})


/*configurações go servidor - fim*/

/* configuração do banco de dados - inicio*/
//importar o modulo mongoose
const mongoose = require('mongoose')
/* configuração do banco de dados - fim */
const conexao = ()=>{mongoose.connect('mongodb+srv:mongodb+srv://henrique:080306Hmk@cluster0.o9ghv.mongodb.net/?retryWrites=true&w=majority')
}

/*configuração do banco de dados - fim*/


app.get('/',(req,res)=>{
    conexao()
    //res,send('Funcionando')
    res.render('index.ejs',{nome:"Alunos feiosos",turma:"2EMIA",disciplina:"LP2"})
})

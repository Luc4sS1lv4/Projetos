const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const porta = 8081
const handlebars = require('express-handlebars')
const post = require("./models/Post")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

app.get("/", (req,res)=>{
    post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
    
})

app.get('/form', (req, res)=>{
    res.render('form')
})

app.post("/add", (req, res)=>{
    post.create({
        Título: req.body.titulo,
        Conteudo: req.body.conteudo
    }).then(()=> res.redirect("/"))
    .catch(()=> res.send("erro ao criar post"))
})




app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))







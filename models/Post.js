const db = require("./db")

const post = db.Sequelize.define("Postagems", {
    Título: {
        type: db.sequelize.STRING
    },
    Conteudo: {
        type: db.sequelize.TEXT
    }
})

//post.sync({force:true})

module.exports = post
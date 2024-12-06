const db = require("./db")

const post = db.Sequelize.define("postagems", {
    Título: {
        type: db.sequelize.STRING
    },
    Conteudo: {
        type: db.sequelize.TEXT
    }
})

//post.sync({force:true})

module.exports = post
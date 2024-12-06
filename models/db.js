const sequelize = require('sequelize')


const Sequelize = new sequelize("postagens", "root", "root",{
    host: "localhost",
    dialect: "mysql"
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
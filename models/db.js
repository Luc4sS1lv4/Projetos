const sequelize = require('sequelize')


const Sequelize = new sequelize("projeto", "root", "root",{
    host: "localhost",
    dialect: "mysql"
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
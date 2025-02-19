const { SEquelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

sequelize.authenticate()
            .then(() => {
                console.log('Conexão feita com sucesso!')
                return sequelize.sync()
            })
            .catch(err => {
                console.error('Não foi posssivel se conectar', err)
            })

module.exports = sequelize;
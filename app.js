const sequelize = require('./utils/database')
const User = require('./models/user')
sequelize.sync().then(result =>{
    console.log(result)
}).catch(err => {
    console.log(err)
})
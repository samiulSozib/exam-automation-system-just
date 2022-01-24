const {Sequelize,DataTypes}=require('sequelize')

const sequelize=new Sequelize('j_e_a_s','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
});

sequelize.authenticate()
    .then(()=>{
        console.log('database connect success')
    })
    .catch(err=>{
        console.log('error'+err)
    })


const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.sequelize.sync({force:false})
    .then(()=>{
        console.log('sync databse')
    })


db.users=require('./users')(sequelize,DataTypes)

    module.exports=db
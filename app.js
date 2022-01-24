const express=require('express')
const passport=require('passport')
const cookieSession=require('cookie-session')
const setRoute=require('./router/routes')
const setMiddleware=require('./middleware/middlewares')
const passportSetup=require('./config/passport-config')

const app=express()

app.set('view engine','ejs')
app.set('views')


app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['samiul_bashar']
}))

app.use(passport.initialize())
app.use(passport.session())

setMiddleware(app)
setRoute(app)
require('./model/database')


app.listen(1000,()=>{
    console.log('server created success')
})
const authRoute=require('./authRoute')
const homapageRoute=require('./homePageRoute')

const routes=[
    // {
    //     path:'/home',
    //     handler:homapageRoute
    // },
    {
        path:'/auth',
        handler:authRoute
    },
    {
        path:'/',
        // handler:(req,res,next)=>{
        //     //res.render('pages/auth/login')
        //     //res.send('abc')
        // }
        handler:homapageRoute
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}
const authRoute=require('./authRoute')
const homapageRoute=require('./homePageRoute')
const admin_homepage_route=require('./admin/admin_homepage_router')

const routes=[
    // {
    //     path:'/home',
    //     handler:homapageRoute
    // },
    {
        path:'/admin',
        handler:admin_homepage_route
    },
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
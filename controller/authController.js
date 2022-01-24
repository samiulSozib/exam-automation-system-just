const passport=require('passport')



exports.getLogin=async(req,res,next)=>{
    return res.render('pages/auth/login',{title:"Login Page"})
}


exports.googleRedirect=async(req,res,next)=>{
    //res.send(req.user)
    return res.redirect('/')
}


exports.getLogout=async(req,res,next)=>{
    req.logout()
    return res.redirect('/auth/login')
}
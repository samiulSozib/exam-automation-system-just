exports.getHomePage=async(req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role=='3'){
        return res.render('pages/homepage/student_homepage',{title:"Homepage "+req.user.student_id})
    }else if(req.user.role=='2'){
        return res.render('pages/homepage/teacher_homepage',{title:"Homepage"})
    }
    
}
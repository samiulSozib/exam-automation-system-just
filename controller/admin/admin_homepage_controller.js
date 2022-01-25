const db=require('../../model/database')
const Courses=db.courses

exports.getAddCourseController=async(req,res,next)=>{
    return res.render('pages/admin/add-course',{title:'Add Course',department_name:req.user.department_name})
}


exports.postAddCourseController=async(req,res,next)=>{
    let {course_name,course_code,course_credit,course_type,session}=req.body

    console.log(course_name+" "+course_code+" "+course_credit+" "+course_type+" "+session)
    
    try{

        let course=await Courses.create({
            course_name,
            course_code,
            course_credit,
            course_type,
            department_name:req.user.department_name,
            session
        })

        if(course){
            console.log('course created success')
            return res.redirect('/admin/add-course')
        }else{
            console.log('course created fail')
            return res.redirect('/admin/add-course')
        }

    }catch(e){
        console.log(e)
        next(e)
    }
}
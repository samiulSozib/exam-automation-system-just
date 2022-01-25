const router=require('express').Router()
const {getAddCourseController,postAddCourseController}=require('../../controller/admin/admin_homepage_controller')


router.get('/add-course',getAddCourseController)
router.post('/add-course',postAddCourseController)

module.exports=router
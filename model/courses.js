
module.exports=(sequelize,DataTypes)=>{
    const Courses=sequelize.define('courses',{
        course_name:{
            type:DataTypes.STRING
        },
        course_code:{
            type:DataTypes.STRING
        },
        course_credit:{
            type:DataTypes.STRING
        },
        course_type:{
            type:DataTypes.STRING
        },
        department_name:{
            type:DataTypes.STRING
        },
        session:{
            type:DataTypes.STRING
        }
    },{
        timestamps:true
    })
    return Courses
}
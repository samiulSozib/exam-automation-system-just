const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const db=require('../model/database')
const Users=db.users

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser(async(id,done)=>{
    await Users.findByPk(id).then((user)=>{
        done(null,user)
    })
})


passport.use(
    new GoogleStrategy({
        callbackURL:'/auth/google/redirect',
        clientID:'941151751611-5r81lffu7ucmvgf3bu77mpe8pk1umodn.apps.googleusercontent.com',
        clientSecret:'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'
    },async(accessToken,refreshToken,profile,done)=>{
        //console.log('passport callback fuction call')
        //console.log(profile.emails[0].value)
        console.log(profile)
       
        // validate the email for just institute email (teacher: just.edu.bd , student:student.just.edu.bd)
        if(profile._json.hd=='just.edu.bd'|| profile._json.hd=='student.just.edu.bd'||profile.emails[0].value=='samiulcse2018@gmail.com'){
            const user=await Users.findOne({where:{googleId:profile.id}})

        if(user){
            //console.log('user already registered',user)
            done(null,user)
        }else{
            try{
                let role='';
                let student_id=''
                let department_name=''
                let department_id=''
                let session=''
               
                if(profile._json.hd=='just.edu.bd'){
                    role='2'
                }else if(profile._json.hd=='student.just.edu.bd'){
                    role='3'
                    let profile_email=profile._json.email
                    let split_email=(profile_email.split('@'))[0].split('.')
                    //console.log(split_email)
                    student_id=split_email[0]
                    department_name=split_email[1]
                    department_id=split_email[0].substring(2,4)
                    session=split_email[0].substring(0,2)
                }
                //console.log(department_id+" "+session)

                const new_user=await Users.create({
                    googleId:profile.id,
                    name:profile._json.name,
                    avatar:profile._json.picture,
                    department_id:department_id,
                    student_id:student_id,
                    session:'20'+session+'-'+(1+parseInt(session)),
                    email:profile._json.email,
                    phone_number:'',
                    bank_account:'',
                    current_designation:'',
                    department_name:department_name,
                    university_name:'just',
                    role:role,
                    status:'1'
                })
                if(new_user){
                    //console.log(new_user)
                    done(null,new_user)
                }else{
                    console.log('user create fail')
                }
            }catch(e){
                console.log(e)
            }
        }

        }else{
            console.log('it is not just instutute email')
        }

    })
)
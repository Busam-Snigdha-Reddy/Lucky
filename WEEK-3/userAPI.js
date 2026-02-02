import exp from'express'
import {UserModel} from '../WEEK-3/models/userModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const userApp=exp.Router()

//USER API ROUTES
//POST ROUTE
userApp.post('/users',async(req,res)=>{
    let newUser = req.body;
    //hash the password
    let hashedPassword = await hash(newUser.password,12)
    //Replace plain password with hashed password
    newUser.password = hashedPassword;
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).json({message:"user created"})
})


//User Authentication(login) route
userApp.post('/auth',async(req,res)=>{
    //get user cred obj
    let userCred=req.body;
    //check for username
    let userOfDB =await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    else{
    //compare passwords
    let status =  compare(userCred.password, userOfDB.password) //await not working here --issue 
    //if passwords are matched
    if(status === false){
        return res.status(404).json({message:"Invalid Password"})
    }
}
    //create signed token
    //Once the user credentials are verified then the login route creates a JWT (Json web Token) Token
    let signedToken = jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
    //sav ethe token as HTTP only cookie
    res.cookie('token',signedToken,{httpOnly:true,secure:false,sameSite:"lax"})
    //send token in response
    res.status(200).json({message:"login success"})
})


//GET ROUTE
userApp.get('/users',async (req,res)=>{
    //read user from db
    let usersList = await UserModel.find()
    //send request
    res.status(200).json({message:"Users",payload:usersList})
})

//Read user by ObjectId
userApp.get('/users/:id',async(req,res)=>{
    let objId = req.params.id;
    //find user in DB
    let userObj = await UserModel.findById(objId)
    //send response
    res.status(200).json({message:"user",payload:userObj})

})
//PUT ROUTE -- to update the data 
userApp.put('/users/:id',async(req,res)=>
{
    //get obj id from url params
    let objId = req.params.id
    //get modified user from req
    let modifiedUser = req.body
    //make update
    await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true,runValidators:true})
    //send response
    res.status(200).json({message:"user modified",payload:modifiedUser})
})

//DELETE --to delete the data
userApp.delete('/users/:id',async(req,res)=>
{
    let objId = req.params.id;
    let deletedUser = await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed",payload:deletedUser})

})
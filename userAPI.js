import exp from'express'
import {UserModel} from '../BACKEND-DEMO2/models/userModel.js'
export const userApp=exp.Router()

//USER API ROUTES
//POST ROUTE
userApp.post('/users',async(req,res)=>{
    let newUser = req.body;
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).json({message:"user created"})
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
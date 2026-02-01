import exp from'express'
import {ProductModel} from '../BACKEND-DEMO2/models/productModel.js'
export const productApp=exp.Router()

//product api routes

//GET ROUTE
productApp.get('/products',async (req,res)=>{
    //read product from db
    let productsList = await ProductModel.find()
    //send request
    res.status(200).json({message:"Products",payload:productsList})
})

//POST ROUTE
productApp.post('/products',async(req,res)=>{
    let newProduct = req.body;
    //create new product document
    let newProductDoc = new ProductModel(newProduct)
    //save in db
    await newProductDoc.save()
    //send response
    res.status(201).json({message:"product created"})
})

//read product by objectId
productApp.get('/products/:id',async(req,res)=>{
    let objId = req.params.id;
    //find product in DB
    let productObj = await ProductModel.findById(objId)
    //send response
    res.status(200).json({message:"product",payload:productObj})

})

//update data --PUT ROUTE
productApp.put('/products/:id',async(req,res)=>
{
    //get obj id from url params
    let objId = req.params.id
    //get modified user from req
    let modifiedProduct = req.body
    //make update
    await ProductModel.findByIdAndUpdate(objId,
        {$set:{...modifiedProduct}},
        {new:true})
    //send response
    res.status(200).json({message:"product modified",payload:modifiedProduct})
})

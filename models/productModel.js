import {Schema,model} from 'mongoose'
// create product schema
const productSchema = new Schema({
    pid:{
        type:Number,
        requried:[true,"pid is requried"],
        minLength:[4,"minimum length should be 4"],
        maxLength:[6,"max length exceeded"]

    },
    productName:{
        type:String,
        requried:[true,"productName is requried"],
        minLength:[8,"minimum length should be 4"],
        maxLength:[15,"max length exceeded"]


    },
    price:{
        type:String,
        requried:[true,"price is requried"],
        
    }

},{
    strict:"throw",//it throws the error directly when new feilds are entered
    timestamps:true
});

//create User model with that schema
export const ProductModel = model("product",productSchema)
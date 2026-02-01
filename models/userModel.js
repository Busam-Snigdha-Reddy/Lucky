import {Schema,model} from 'mongoose'
// create user schema
const userSchema = new Schema({
    username:{
        type:String,
        requried:[true,"Username is requried"],
        minLength:[4,"minimum length should be 4"],
        maxLength:[6,"max length exceeded"]

    },
    password:{
        type:String,
        requried:[true,"Password is requried"]

    },
    age:{
        type:Number,
        requried:[true,"Age is requried"],
        min:[18,"age should be above 18"],
        max:[25,"age should be less than 25"]
    }

},{
    strict:"throw",//it throws the error directly when new feilds are entered
    timestamps:true
});

//create User model with that schema
export const UserModel = model("child",userSchema)
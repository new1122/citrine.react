import mongoose from "mongoose";

const userSchema1 = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Shops = mongoose.model("Shops", userSchema1)
export default Shops;
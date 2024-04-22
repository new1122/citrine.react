import Shops from './Shops.model.js';
import User from './user.model.js'

export const signup=async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User Already Exist"})
        }
        const createUser = new User({
            name,
            email,
            password
        })
        await createUser.save();
        res.status(201).json({message:"User Registered Successfully!!!", 
        user:{
            _id:createUser._id,
            name:createUser.name,
            email:createUser.email,
            password: createUser.password
        }})
    } catch (error) {
        console.log("error" + error)
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await (password ==user.password)
        if (!user || !isMatch){
            return res.status(400).json({message:"Invalid UserName or Password"});
        }
        else{
            res.status(200).json({message:"Login Successful",
             user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error : " + error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const shopping=async (req, res)=>{
    try {
        const {title, price, email} = req.body;
        const user = await User.findOne({email})
        if(user){
            
            res.status(200).json({message:"Shopped Item Added to Your Database"})
            const createUserShop = new Shops({
                title,
                price
            })
            await createUserShop.save();
            res.status(201).json({message:"Item Shopped is saved!!!"})
            
        }
        else{
            return  res.status(400).json({message:"Login First"})
        }
    } catch (error) {
        console.log("error" + error)
        res.status(500).json({message:"Internal Server Error"});
    }
};
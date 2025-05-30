import userModel from "../models/userModel.js";



//add items to user cart

const addToCart = async(req,res)=>{
try {

    let userData = await userModel.findOne({_id:req.body.userId})
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]= 1
    }else{
        cartData[req.body.itemId]+= 1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    req.json({success:true,message:"Added To Cart"});
} catch (error) {
    console.log(err);
    
}


}



//remove itmes from user cart
const removeFromCart = async (req,res)=>{

}


//fetch user cart data
const getCart = async (req,res)=>{

}


export { addToCart, getCart, removeFromCart };

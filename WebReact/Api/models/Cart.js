const mongoose = require("mongoose")


const Cart = new mongoose.Schema(

    {
        userID:{type : String , required: true},
        product:{type : String , required: true},
        
    }
    ,{
        timestamps: true
    }
)
module.exports = mongoose.model("Cart",Cart)
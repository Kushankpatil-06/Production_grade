import mongoose, {Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new Schema(
    {
        username :{
            type:String,
            required:true,
            unique : true ,
            lowercase: true,
            trim : true ,
            index : true,
        },
        email:{
            type:String,
            required:true,
            unique : true ,
            lowercase: true,
            trim : true ,
            // index : true,
        },
        Fullname :{
            type:String,
            required:true,
            // unique : true ,
            // lowercase: true,
            trim : true ,
            index : true,
        },
        avatar:{
           type : String,
           required:true,
        },
        CoverImage:{
           type : String,
        //    required:true,
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId, 
                ref:"Video",
            }
        ],
        password : {
            type:String,
            // select:false,
            required:true
        },
        refreshTokens:{
            type:String
        }
   
    },
    {
        timestamps:true
    }
)

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next()
    next();
    this.password = bcrypt.hash(this.password,10);
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    await bcrypt.compare(password,this.password).then((result)=>{
       return result;
    })
}

userSchema.methods.generateAccessToken = function (){
    jwt.sign({
        _id:this.id,
        email: this.email,
        username = this.username,
        Fullname = this.Fullname
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function (){
     jwt.sign({
        _id:this.id
        // email: this.email,
        // username = this.username,
        // Fullname = this.Fullname
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}

export const User  = mongoose.model("User",userSchema)
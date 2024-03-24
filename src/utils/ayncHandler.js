const asyncHandler =  (requestHandler)=>{
//promises part
return (req,res,next)=>{
    Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
}

}
export{asyncHandler}

//Aisa function bnaa rhe hai jo multiple jagah use kr skte hai 

// const asyncHandler = (func) => async (req,res,next) =>{
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success: false,
//             message : err.message
//         })
//     }
// }








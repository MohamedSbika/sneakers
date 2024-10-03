import mongoose from "mongoose"
/**classe user */
const userSchema = new mongoose.Schema(
    {
        nom:{
            required:true,
            type:String
        },
        Email:{
            required:true,
            type:String
        },
        Password:{
            required:true,
            type:String,
           

        },
        role: {
            type: String,
            default: 'user', 
          },

    },  
    {timestamp: true}
);
/** instance ml classe user */
const UserModel = mongoose.model("user", userSchema);
/**tnajm testaamlou win mat7eb */
export default UserModel;
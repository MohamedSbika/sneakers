import mongoose from "mongoose"
/**classe admin */
const adminSchema = new mongoose.Schema(
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

    },  
    {timestamp: true}
);
/** instance ml classe admin */
const AdminModel = mongoose.model("admin", adminSchema);
/**tnajm testaamlou win mat7eb */
export default AdminModel;
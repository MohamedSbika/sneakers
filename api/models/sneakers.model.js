import mongoose from "mongoose"
/**classe sneakers */
const sneakersSchema = new mongoose.Schema(
    {
        nom:{
            required:true,
            type:String
        },
        prix:{
            required:true,
            type:Number
        },
        imgUrl:{
            required:true,
            type:String
        },
        Category:{
            required:true,
            type:String,
            enum: ['kids', 'women', 'men'] // Restriction des valeurs possibles

        },

    },  
    {timestamp: true}
);
/** instance ml classe sneakers */
const Sneakers = mongoose.model("Sneakers", sneakersSchema);
/**tnajm testaamlou win mat7eb */
export default Sneakers;
import mongoose from "mongoose"
const schema = mongoose.Schema;
const adminSchema = new schema({
    email: {
        type: String,
        unique :true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    addMovies:[
        {
            type: mongoose.Types.ObjectId,
            ref:"Movie"
        }
    ],
})
export default mongoose.model("Admin", adminSchema);
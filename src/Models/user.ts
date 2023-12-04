import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is required"]
    },
    Email: {
        type: String,
        unique: true,
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, "Wrong E-mail format"],
    },
    PhoneNo: {
        type: String,
        unique: true, 
        maxlength: 14, 
    }

});


const User = mongoose.model('User', userSchema);

export default User;
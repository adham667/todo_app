"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;

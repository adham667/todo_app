"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const toDoschema = new mongoose_1.default.Schema({
    Title: {
        type: String,
        maxlength: 50,
    },
    Description: {
        type: String,
        maxlength: 200,
    },
    user: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User"
    }
});
const toDo = mongoose_1.default.model('toDo', toDoschema);
exports.default = toDo;

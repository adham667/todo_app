"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute = require('./Routes/userRoutes');
const toDoRoute = require('./Routes/toDoRoutes');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", userRoute);
app.use("/todo", toDoRoute);
app.listen(3000, function () {
    console.log("listening on port 3000");
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../Controllers/userController");
const Router = require('express').Router;
const userRoute = Router();
userRoute.get('/', userController_1.getAllusersController);
userRoute.get('/:userID', userController_1.getUserController);
userRoute.post('/', userController_1.AddUserController);
module.exports = userRoute;

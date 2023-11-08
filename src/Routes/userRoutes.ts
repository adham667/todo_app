import {AddUserController, getAllusersController, getUserController} from '../Controllers/userController'


const Router = require('express').Router

const userRoute = Router();

userRoute.get('/', getAllusersController);
userRoute.get('/:userID', getUserController);
userRoute.post('/', AddUserController);

module.exports = userRoute



import { getAllTasksController, addTaskController, getUserTaskContorller } from "../Controllers/toDoController";

const Router = require('express').Router

const toDoRoute = Router();

toDoRoute.get('/', getAllTasksController);
toDoRoute.get('/:userID', getUserTaskContorller);
toDoRoute.post('/', addTaskController);

module.exports =  toDoRoute
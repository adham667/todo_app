"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoController_1 = require("../Controllers/toDoController");
const Router = require('express').Router;
const toDoRoute = Router();
toDoRoute.get('/', toDoController_1.getAllTasksController);
toDoRoute.get('/:userID', toDoController_1.getUserTaskContorller);
toDoRoute.post('/', toDoController_1.addTaskController);
module.exports = toDoRoute;

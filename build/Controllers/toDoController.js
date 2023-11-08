"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskController = exports.getUserTaskContorller = exports.getAllTasksController = void 0;
const toDoService_1 = require("../Services/toDoService");
const getAllTasksController = (req, res) => {
    const tasks = (0, toDoService_1.getAllTasks)();
    res.json(tasks);
};
exports.getAllTasksController = getAllTasksController;
const getUserTaskContorller = (req, res) => {
    const userID = +req.params.userID;
    (0, toDoService_1.getUserTask)(userID)
        .then((task) => {
        res.json(task);
    })
        .catch((err) => {
        res.status(400).json(err.message);
    });
};
exports.getUserTaskContorller = getUserTaskContorller;
const addTaskController = (req, res) => {
    const task = req.body;
    (0, toDoService_1.addTask)(task)
        .then((msg) => {
    })
        .catch((err) => {
        console.error(err);
    });
    res.end();
};
exports.addTaskController = addTaskController;

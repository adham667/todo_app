"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskController = exports.getUserTaskContorller = exports.getAllTasksController = void 0;
const toDoService_1 = require("../Services/toDoService");
const getAllTasksController = (req, res) => {
    const tasks = (0, toDoService_1.getAllTasks)();
    res.json(tasks);
};
exports.getAllTasksController = getAllTasksController;
const getUserTaskContorller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = req.params.userID;
        const tasks = yield (0, toDoService_1.getUserTask)(userID);
        if (tasks) {
            res.json({ Data: tasks });
        }
        else {
            res.status(404).json({ message: "user not found" });
        }
    }
    catch (err) {
        console.error('Error in getUserController:', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getUserTaskContorller = getUserTaskContorller;
const addTaskController = (req, res) => {
    const task = req.body;
    const addedtask = (0, toDoService_1.addTask)(task);
    res.status(201).json({ message: "Success" });
};
exports.addTaskController = addTaskController;

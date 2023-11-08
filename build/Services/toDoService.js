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
exports.getUserTask = exports.getAllTasks = exports.addTask = void 0;
const userService_1 = require("./userService");
let tasks = [
    {
        id: 1,
        title: "first",
        description: "hard",
        UserId: 1
    }
];
const addTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            const id = +task.UserId;
            if ((0, userService_1.userexist)(id)) {
                tasks.push(task);
                reslove("task added successfully");
            }
            else {
                reject(new Error("user doesn't exist"));
            }
        }, 2000);
    });
});
exports.addTask = addTask;
const getUserTask = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            if ((0, userService_1.userexist)(UserId)) {
                let usertasks = [];
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].UserId == UserId) {
                        usertasks.push(tasks[i]);
                    }
                }
                resolve(usertasks);
            }
            else {
                reject(new Error("user doesn't exist"));
            }
        }), 2000);
    });
});
exports.getUserTask = getUserTask;
const getAllTasks = () => {
    return tasks;
};
exports.getAllTasks = getAllTasks;

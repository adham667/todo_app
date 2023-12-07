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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTask = exports.getAllTasks = exports.addTask = void 0;
const toDo_1 = __importDefault(require("../Models/toDo"));
const user_1 = __importDefault(require("../Models/user"));
const addTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((reslove, reject) => {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            if (yield user_1.default.exists(task.UserId)) {
                toDo_1.default.create(task);
                reslove("task added successfully");
            }
            else {
                reject(new Error("user doesn't exist"));
            }
        }), 2000);
    });
});
exports.addTask = addTask;
const getUserTask = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const userExists = yield user_1.default.exists({ _id: UserId });
                if (userExists) {
                    const userTasks = yield toDo_1.default.find({
                        user: UserId
                    });
                    resolve(userTasks);
                }
                else {
                    reject(new Error("User doesn't exist"));
                }
            }
            catch (error) {
                reject(error);
            }
        }), 2000);
    });
});
exports.getUserTask = getUserTask;
const getAllTasks = () => {
    const tasks = toDo_1.default.find();
    return tasks;
};
exports.getAllTasks = getAllTasks;

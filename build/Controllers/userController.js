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
exports.getUserController = exports.getAllusersController = exports.AddUserController = void 0;
const userService_1 = require("../Services/userService");
const user_1 = __importDefault(require("../Models/user"));
const getAllusersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find();
    res.status(200).json({ message: "Success", users });
});
exports.getAllusersController = getAllusersController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = req.params.userID;
        const user = yield (0, userService_1.getUser)(userID);
        if (user) {
            res.json({ Data: user });
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (err) {
        console.error('Error in getUserController:', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getUserController = getUserController;
const AddUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const addeduser = yield (0, userService_1.AddUser)(user);
    res.status(201).json({ message: "Success", addeduser });
});
exports.AddUserController = AddUserController;

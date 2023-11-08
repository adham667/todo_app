"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = exports.getAllusersController = exports.AddUserController = void 0;
const userService_1 = require("../Services/userService");
const getAllusersController = (req, res) => {
    const users = (0, userService_1.getAllusers)();
    res.json({ Data: users });
};
exports.getAllusersController = getAllusersController;
const getUserController = (req, res) => {
    const userID = +req.params.userID;
    (0, userService_1.getUser)(userID)
        .then((user) => {
        res.json({ Data: user });
    })
        .catch((err) => {
        res.status(400).json(err.message);
    });
};
exports.getUserController = getUserController;
const AddUserController = (req, res) => {
    const user = req.body;
    (0, userService_1.AddUser)(user);
    res.end();
};
exports.AddUserController = AddUserController;

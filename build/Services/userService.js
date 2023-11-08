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
exports.userexist = exports.AddUser = exports.getUser = exports.getAllusers = void 0;
let users = [
    {
        id: 1,
        name: "adsd",
        PhoneNo: "112321",
        Age: 20
    },
    {
        id: 2,
        name: "dvvvd",
        PhoneNo: "10101010",
        Age: 201
    }
];
const AddUser = (u) => {
    users.push(u);
};
exports.AddUser = AddUser;
const getAllusers = () => {
    return users;
};
exports.getAllusers = getAllusers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userexist(id)) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].id === id) {
                        resolve(users[i]);
                    }
                }
            }
            else {
                reject(new Error("user doesn't exist"));
            }
        }, 2000);
    });
});
exports.getUser = getUser;
const userexist = (id) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return 1;
        }
    }
    return 0;
};
exports.userexist = userexist;

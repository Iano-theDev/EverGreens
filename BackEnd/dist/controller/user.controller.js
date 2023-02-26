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
exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUserById = exports.loginUser = exports.createUser = void 0;
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
// create a user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, phone } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const user = {
            id: (0, uuid_1.v4)(),
            email: email,
            password: hashedPassword,
            phone: phone
        };
        // check for connection
        if (db_connection_1.default.checkConnection()) {
            const userCreated = yield db_connection_1.default.exec('InsertOrUpdateUser', { id: user.id, email: user.email, password: user.password, phone: user.phone, is_admin: '0', is_deleted: '0', is_sent: '0', created_at: new Date().toISOString() });
            if (userCreated) {
                const token = jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET, { expiresIn: '1d' });
                res.status(200).json({ token });
            }
            else {
                res.status(500).json({ message: 'Error creating user' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createUser = createUser;
// login a user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (db_connection_1.default.checkConnection()) {
            const user = yield db_connection_1.default.exec('GetUserByEmail', { email: email });
            if (user.length > 0) {
                const validPassword = yield bcrypt_1.default.compare(password, user[0].password);
                if (validPassword) {
                    const token = jsonwebtoken_1.default.sign(user[0], process.env.JWT_SECRET, { expiresIn: '1d' });
                    res.status(200).json({ "token": token, user: user[0] });
                }
                else {
                    res.status(500).json({ message: 'Invalid password' });
                }
            }
            else {
                res.status(500).json({ message: 'Invalid email' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.loginUser = loginUser;
// get a user
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const userFound = yield db_connection_1.default.exec('GetUserById', { id: id });
            if (userFound.length > 0) {
                res.status(200).json(userFound[0]);
            }
            else {
                res.status(500).json({ message: 'User not found' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUserById = getUserById;
// update a user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // get user from database
        console.log("body", req.body);
        if (db_connection_1.default.checkConnection()) {
            const userFound = yield db_connection_1.default.exec('GetUserById', { id: id });
            if (userFound.length > 0) {
                const user = {
                    id: userFound[0].id,
                    email: req.body.email,
                    password: req.body.password,
                    phone: req.body.phone,
                    is_admin: req.body.is_admin,
                    is_deleted: req.body.is_deleted,
                    is_sent: req.body.is_sent,
                    created_at: userFound[0].created_at
                };
                const salt = yield bcrypt_1.default.genSalt(10);
                user.password = yield bcrypt_1.default.hash(user.password, salt);
                const userUpdated = yield db_connection_1.default.exec('InsertOrUpdateUser', user);
                if (userUpdated) {
                    res.status(200).json({ message: 'User updated successfully', userUpdated });
                }
            }
            else {
                res.status(500).json({ message: 'User not found' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateUser = updateUser;
// delete a user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const userFound = yield db_connection_1.default.exec('GetUserById', { id: id });
            if (userFound.length > 0) {
                const user = {
                    id: userFound[0].id,
                    email: userFound[0].email,
                    password: userFound[0].password,
                    phone: userFound[0].phone,
                    isAdmin: userFound[0].is_admin,
                    isDeleted: userFound[0].is_deleted,
                    isSent: userFound[0].is_sent,
                    createdAt: userFound[0].created_at
                };
                yield db_connection_1.default.exec('DeleteUser', { id: user.id });
                res.status(200).json({ message: 'User deleted successfully' });
            }
            else {
                res.status(500).json({ message: 'User not found' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteUser = deleteUser;
// get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const users = yield db_connection_1.default.exec('GetAllUsers');
            if (users.length > 0) {
                res.status(200).json(users);
            }
            else {
                res.status(200).json({ message: 'No users found' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllUsers = getAllUsers;

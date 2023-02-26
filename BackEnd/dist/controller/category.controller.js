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
exports.getCategoryById = exports.getCategoryByName = exports.getAllCategories = exports.createCategory = void 0;
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const category_validate_1 = require("../helpers/category.validate");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = {
            id: (0, uuid_1.v4)(),
            name: req.body.name,
            is_top_level: req.body.is_top_level,
        };
        const { error } = (0, category_validate_1.validateCategory)(category);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedCategory = yield db_connection_1.default.exec("InsertOrUpdateCategory", Object.assign({}, category));
            if (insertedCategory) {
                res.status(200).send(insertedCategory);
            }
            else {
                res.status(500).send("Error creating category");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error creating category");
    }
});
exports.createCategory = createCategory;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const categories = yield db_connection_1.default.exec("GetAllCategories", {});
            if (categories) {
                if (categories.length > 0) {
                    res.status(200).send(categories);
                }
                else {
                    res.status(200).send({ message: "No categories found" });
                }
            }
            else {
                res.status(500).send({ message: "Error getting categories" });
            }
        }
    }
    catch (error) {
        res.status(500).send({ message: "Error getting categories" });
    }
});
exports.getAllCategories = getAllCategories;
const getCategoryByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            console.log(req.params.name);
            const category = yield db_connection_1.default.exec("GetCategoryByName", { name: req.params.name });
            if (category) {
                if (category.length > 0) {
                    res.status(200).send(category);
                }
                else {
                    res.status(200).send({ message: "No categories found" });
                }
            }
            else {
                res.status(500).send("Error getting category");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error getting category");
    }
});
exports.getCategoryByName = getCategoryByName;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const id = req.params.id;
            const category = yield db_connection_1.default.exec("GetCategoryById", { id: id });
            if (category) {
                if (category.length > 0) {
                    res.status(200).send(category);
                }
                else {
                    res.status(200).send({ message: "No categories found" });
                }
            }
            else {
                res.status(500).send({ message: "Error getting category" });
            }
        }
    }
    catch (error) {
        res.status(500).send({ message: "Error getting category" });
    }
});
exports.getCategoryById = getCategoryById;

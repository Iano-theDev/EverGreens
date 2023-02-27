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
exports.deleteCartItem = exports.getCartItemByUserId = exports.removeOrReduceQuantity = exports.updateCartItem = exports.createCartItem = void 0;
const cartItem_validate_1 = __importDefault(require("../helpers/cartItem.validate"));
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const uuid_1 = require("uuid");
const createCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItem = {
            id: (0, uuid_1.v4)(),
            product_id: req.body.product_id,
            user_id: req.body.user.id,
            quantity: req.body.quantity
        };
        const { error } = (0, cartItem_validate_1.default)(cartItem);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedCartItem = yield db_connection_1.default.exec("InsertOrUpdateCartItem", Object.assign({}, cartItem));
            if (insertedCartItem) {
                res.status(200).send(insertedCartItem);
            }
            else {
                res.status(500).send("Error creating cart item");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error creating cart item");
    }
});
exports.createCartItem = createCartItem;
const updateCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItem = {
            id: req.body.id,
            product_id: req.body.product_id,
            user_id: req.body.user.id,
            quantity: req.body.quantity
        };
        const { error } = (0, cartItem_validate_1.default)(cartItem);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const updatedCartItem = yield db_connection_1.default.exec("InsertOrUpdateCartItem", Object.assign({}, cartItem));
            if (updatedCartItem) {
                res.status(200).send(updatedCartItem);
            }
            else {
                res.status(500).send("Error updating cart item");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error updating cart item");
    }
});
exports.updateCartItem = updateCartItem;
const removeOrReduceQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const updatedCartItem = yield db_connection_1.default.exec("RemoveOrReduceQuantity", { id: id });
            if (updatedCartItem) {
                res.status(200).send(updatedCartItem);
            }
            else {
                res.status(500).send("Error updating cart item");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error updating cart item");
    }
});
exports.removeOrReduceQuantity = removeOrReduceQuantity;
const getCartItemByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.body.user.id;
        if (db_connection_1.default.checkConnection()) {
            const cartItems = yield db_connection_1.default.exec("GetCartItemByUserId", { user_id });
            if (cartItems) {
                res.status(200).send(cartItems);
            }
            else {
                res.status(500).send("Error getting cart items");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error getting cart items");
    }
});
exports.getCartItemByUserId = getCartItemByUserId;
const deleteCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const deletedCartItem = yield db_connection_1.default.exec("DeleteCartItem", { id });
            if (deletedCartItem) {
                res.status(200).send(deletedCartItem);
            }
            else {
                res.status(500).send("Error deleting cart item");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error deleting cart item");
    }
});
exports.deleteCartItem = deleteCartItem;

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
exports.getOrdersByUserId = exports.updateOrder = exports.deleteOrder = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const order_validate_1 = require("../helpers/order.validate");
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = {
            id: (0, uuid_1.v4)(),
            user_id: req.body.user_id,
            created_at: new Date().toISOString(),
            is_paid: req.body.is_paid,
            is_delivered: req.body.is_delivered,
            amount: req.body.amount,
        };
        // validate order fields
        const { error } = (0, order_validate_1.validateOrder)(order);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedOrder = yield db_connection_1.default.exec("InsertOrUpdateOrder", Object.assign({}, order));
            if (insertedOrder) {
                res.status(200).send(insertedOrder);
            }
            else {
                res.status(500).send("Error creating order");
            }
        }
        else {
            res.status(500).send("Error creating order");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error creating order");
    }
});
exports.createOrder = createOrder;
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const orders = yield db_connection_1.default.exec("GetAllOrders", {});
            if (orders) {
                if (orders.length > 0) {
                    res.status(200).send(orders);
                }
                else {
                    res.status(200).send({ message: "No orders found" });
                }
            }
            else {
                res.status(500).send({ message: "Error getting orders" });
            }
        }
    }
    catch (error) {
        res.status(500).send({ message: "Error getting orders" });
    }
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const order = yield db_connection_1.default.exec("GetOrderById", { id: req.params.id });
            if (order.length > 0) {
                res.status(200).send(order);
            }
            else {
                res.status(500).send("Error getting order");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error getting order");
    }
});
exports.getOrderById = getOrderById;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const order = yield db_connection_1.default.exec("DeleteOrder", { id: req.params.id });
            if (order) {
                res.status(200).send(order);
            }
            else {
                res.status(500).send("Error deleting order");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error deleting order");
    }
});
exports.deleteOrder = deleteOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield db_connection_1.default.exec("GetOrderById", { id: req.params.id });
        console.log(order);
        if (order) {
            const updatedOrder = {
                id: req.params.id || order[0].id,
                user_id: order[0].user_id,
                created_at: new Date(order[0].created_at).toISOString(),
                is_paid: req.body.is_paid || order[0].is_paid,
                is_delivered: req.body.is_delivered || order[0].is_delivered,
                amount: req.body.amount || order[0].amount,
            };
            console.log(updatedOrder);
            const { error } = (0, order_validate_1.validateOrder)(updatedOrder);
            if (error)
                return res.status(400).send(error.details[0].message);
            const updatedOrderResult = yield db_connection_1.default.exec("InsertOrUpdateOrder", updatedOrder);
            if (updatedOrderResult) {
                res.status(200).send(updatedOrderResult);
            }
            else {
                res.status(500).send("Error updating order");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error updating order");
    }
});
exports.updateOrder = updateOrder;
const getOrdersByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const orders = yield db_connection_1.default.exec("GetOrdersByUserId", { user_id: req.params.user_id });
            if (orders) {
                res.status(200).send({ message: "Order updated successfully", orders: orders });
            }
            else {
                res.status(500).send("Error getting orders");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error getting orders");
    }
});
exports.getOrdersByUserId = getOrdersByUserId;

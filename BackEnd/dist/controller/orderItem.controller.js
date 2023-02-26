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
exports.updateOrderItem = exports.getAllOrderItemByOrderId = exports.createOrderItem = void 0;
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const orderItem_validate_1 = require("../helpers/orderItem.validate");
const createOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = {
            id: (0, uuid_1.v4)(),
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
        };
        const { error } = (0, orderItem_validate_1.validateOrderItem)(orderItem);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedOrderItem = yield db_connection_1.default.exec("InsertOrUpdateOrderItem", Object.assign({}, orderItem));
            if (insertedOrderItem) {
                res.status(200).send(insertedOrderItem);
            }
            else {
                res.status(500).send("Error creating order item");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error creating order item");
    }
});
exports.createOrderItem = createOrderItem;
const getAllOrderItemByOrderId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const orderItems = yield db_connection_1.default.exec("GetAllOrderItemsByOrderId", { order_id: req.params.order_id });
            if (orderItems) {
                res.status(200).send(orderItems);
            }
            else {
                res.status(500).send("Error getting order items");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error getting order items");
    }
});
exports.getAllOrderItemByOrderId = getAllOrderItemByOrderId;
const updateOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = (0, orderItem_validate_1.validateOrderItem)(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);
        const orderItem = {
            id: req.body.id,
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
        };
    }
    catch (error) {
        res.status(500).send("Error updating order item");
    }
});
exports.updateOrderItem = updateOrderItem;

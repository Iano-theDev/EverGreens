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
exports.updatePayment = exports.createPayment = void 0;
const payment_validate_1 = __importDefault(require("../helpers/payment.validate"));
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = {
            id: (0, uuid_1.v4)(),
            user_id: req.body.user_id,
            order_id: req.body.order_id,
            amount: req.body.amount,
            payment_method_id: req.body.payment_method_id,
        };
        const { error } = (0, payment_validate_1.default)(payment);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedPayment = yield db_connection_1.default.exec("InsertOrUpdatePayment", Object.assign({}, payment));
            if (insertedPayment) {
                res.status(200).send(insertedPayment);
            }
            else {
                res.status(500).send("Error creating payment");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error creating payment");
    }
});
exports.createPayment = createPayment;
const updatePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = {
            id: req.body.id,
            user_id: req.body.user_id,
            order_id: req.body.order_id,
            amount: req.body.amount,
            payment_method_id: req.body.payment_method_id
        };
        const { error } = (0, payment_validate_1.default)(payment);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const updatedPayment = yield db_connection_1.default.exec("InsertOrUpdatePayment", Object.assign({}, payment));
            if (updatedPayment) {
                res.status(200).send(updatedPayment);
            }
            else {
                res.status(500).send("Error updating payment");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error updating payment");
    }
});
exports.updatePayment = updatePayment;

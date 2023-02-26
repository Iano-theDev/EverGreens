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
exports.getAllPaymentMethods = exports.getPaymentMethodById = exports.updatePaymentMethod = exports.createPaymentMethod = void 0;
const paymentMethod_validate_1 = __importDefault(require("../helpers/paymentMethod.validate"));
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const createPaymentMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentMethod = {
            id: (0, uuid_1.v4)(),
            name: req.body.name,
            description: req.body.description,
        };
        const { error } = (0, paymentMethod_validate_1.default)(paymentMethod);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedPaymentMethod = yield db_connection_1.default.exec("InsertOrUpdatePaymentMethod", Object.assign({}, paymentMethod));
            if (insertedPaymentMethod) {
                res.status(200).send(insertedPaymentMethod);
            }
            else {
                res.status(500).send("Error creating payment method");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error creating payment method");
    }
});
exports.createPaymentMethod = createPaymentMethod;
const updatePaymentMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentMethod = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
        };
        const { error } = (0, paymentMethod_validate_1.default)(paymentMethod);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const updatedPaymentMethod = yield db_connection_1.default.exec("InsertOrUpdatePaymentMethod", Object.assign({}, paymentMethod));
            if (updatedPaymentMethod) {
                res.status(200).send(updatedPaymentMethod);
            }
            else {
                res.status(500).send("Error updating payment method");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error updating payment method");
    }
});
exports.updatePaymentMethod = updatePaymentMethod;
const getPaymentMethodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const paymentMethod = yield db_connection_1.default.exec("GetPaymentMethodById", { id: req.params.id });
            if (paymentMethod) {
                if (paymentMethod.length > 0) {
                    res.status(200).send(paymentMethod);
                }
                else {
                    res.status(200).send("No payment method found");
                }
            }
            else {
                res.status(500).send("Error getting payment method");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error getting payment method");
    }
});
exports.getPaymentMethodById = getPaymentMethodById;
const getAllPaymentMethods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const paymentMethods = yield db_connection_1.default.exec("GetAllPaymentMethod", {});
            if (paymentMethods) {
                if (paymentMethods.length > 0) {
                    res.status(200).send(paymentMethods);
                }
                else {
                    res.status(200).send("No payment methods found");
                }
            }
            else {
                res.status(500).send("Error getting payment methods");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error getting payment methods");
    }
});
exports.getAllPaymentMethods = getAllPaymentMethods;

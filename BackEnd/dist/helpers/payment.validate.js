"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validatePayment = (payment) => {
    const schema = joi_1.default.object({
        id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        order_id: joi_1.default.string().required(),
        amount: joi_1.default.number().required(),
        payment_method_id: joi_1.default.string().required(),
    });
    return schema.validate(payment);
};
exports.default = validatePayment;

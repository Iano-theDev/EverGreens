"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrder = void 0;
const joi_1 = __importDefault(require("joi"));
// validate order fields
const orderSchema = joi_1.default.object({
    id: joi_1.default.string().max(255).required(),
    user_id: joi_1.default.string().max(255).required(),
    created_at: joi_1.default.string().min(3).max(255).required(),
    is_paid: joi_1.default.string().max(255).required(),
    is_delivered: joi_1.default.string().max(255).required(),
    amount: joi_1.default.string().max(255).required(),
});
const validateOrder = (order) => {
    return orderSchema.validate(order);
};
exports.validateOrder = validateOrder;

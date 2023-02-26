"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderItem = void 0;
const joi_1 = __importDefault(require("joi"));
// validate order item fields
const orderItemSchema = joi_1.default.object({
    id: joi_1.default.string().min(3).max(255).required(),
    order_id: joi_1.default.string().min(3).max(255).required(),
    product_id: joi_1.default.string().min(3).max(255).required(),
    quantity: joi_1.default.string().required(),
});
const validateOrderItem = (orderItem) => {
    return orderItemSchema.validate(orderItem);
};
exports.validateOrderItem = validateOrderItem;

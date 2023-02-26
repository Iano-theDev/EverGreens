"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// class CartItemModel {
//     id: string;
//     userId: string;
//     productId: string;
//     quantity: number;
//     constructor(id: string, userId: string, productId: string, quantity: number) {
//       this.id = id;
//       this.userId = userId;
//       this.productId = productId;
//       this.quantity = quantity;
//     }
//   }
// validate cart item
const validateCartItem = (cartItem) => {
    const schema = joi_1.default.object({
        id: joi_1.default.string().min(5).max(255).required(),
        user_id: joi_1.default.string().min(5).max(255).required(),
        product_id: joi_1.default.string().max(255).required(),
        quantity: joi_1.default.number().min(1).required(),
    });
    return schema.validate(cartItem);
};
exports.default = validateCartItem;

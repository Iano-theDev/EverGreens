"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// id: string;
//      name: string;
//      description: string;
const validatePaymentMethod = (paymentMethod) => {
    const schema = joi_1.default.object({
        id: joi_1.default.string().required(),
        name: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
    });
    return schema.validate(paymentMethod);
};
exports.default = validatePaymentMethod;

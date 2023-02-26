"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateReview = (review) => {
    const schema = joi_1.default.object({
        id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        product_id: joi_1.default.string().required(),
        rating: joi_1.default.string().required(),
        review: joi_1.default.string().required(),
        is_deleted: joi_1.default.string().required(),
        created_at: joi_1.default.string().required()
    });
    return schema.validate(review);
};
exports.default = validateReview;

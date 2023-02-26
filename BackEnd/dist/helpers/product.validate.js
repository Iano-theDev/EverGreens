"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const joi_1 = __importDefault(require("joi"));
// validate product fields
const productSchema = joi_1.default.object({
    id: joi_1.default.string().min(3).max(255).required(),
    name: joi_1.default.string().min(3).max(255).required(),
    description: joi_1.default.string().min(3).max(255).required(),
    price: joi_1.default.number().min(0.01).required(),
    category_id: joi_1.default.string().min(3).max(255).required(),
    product_image_url: joi_1.default.string().min(3).max(255).required(),
    recently_added: joi_1.default.string().required(),
    featured: joi_1.default.string().required(),
    created_at: joi_1.default.string().required(),
    is_deleted: joi_1.default.string().required()
});
const validateProduct = (product) => {
    return productSchema.validate(product);
};
exports.validateProduct = validateProduct;

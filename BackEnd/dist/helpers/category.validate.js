"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const joi_1 = __importDefault(require("joi"));
// // validate category fields
const categorySchema = joi_1.default.object({
    id: joi_1.default.string().min(3).max(255).required(),
    name: joi_1.default.string().min(3).max(255).required(),
    is_top_level: joi_1.default.string().required(),
});
const validateCategory = (category) => {
    return categorySchema.validate(category);
};
exports.validateCategory = validateCategory;

import CategoryModel from "../model/category.model";
import Joi from "joi";

// // validate category fields


const categorySchema = Joi.object({
    id: Joi.string().min(3).max(255).required(),
    name: Joi.string().min(3).max(255).required(),
    is_top_level: Joi.string().required(),
});


export const validateCategory = (category: CategoryModel) => {
    return categorySchema.validate(category);
}


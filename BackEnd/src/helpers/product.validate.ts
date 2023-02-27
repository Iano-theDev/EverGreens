import ProductModel from "../model/product.model";
import joi from "joi";


// validate product fields

const productSchema = joi.object({
    id: joi.string().min(3).max(255).required(),
    name: joi.string().min(3).max(255).required(),
    description: joi.string().min(3).max(255).required(),
    price: joi.number().min(0.01).required(),
    category_id: joi.string().min(3).max(255).required(),
    product_image_url: joi.string().min(3).max(255).required(),
    recently_added: joi.string().required(),
    featured: joi.string().required(),
    created_at: joi.string().required(),
    is_deleted: joi.string().required()
});

export const validateProduct = (product: ProductModel) => {
    return productSchema.validate(product);
}


import CartItemModel from "../model/cartItem.model";
import Joi from "joi";


const validateCartItem = (cartItem: CartItemModel) => {
    const schema = Joi.object({
        id: Joi.string().min(5).max(255).required(),
        user_id: Joi.string().min(5).max(255).required(),
        product_id: Joi.string().max(255).required(),
        quantity: Joi.number().min(1).required(),
    });
    
    return schema.validate(cartItem);
    }


export default validateCartItem;
  
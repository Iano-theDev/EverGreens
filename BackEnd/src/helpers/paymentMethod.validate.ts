import PaymentMethodModel from "../model/paymentMethod.model";
import Joi from "joi";

// id: string;
//      name: string;
//      description: string;


const validatePaymentMethod = (paymentMethod: PaymentMethodModel) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
    });

    return schema.validate(paymentMethod);
}


export default validatePaymentMethod;
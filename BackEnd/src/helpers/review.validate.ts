import ReviewModel from "../model/review.model";
import Joi from "joi";

const validateReview = (review: ReviewModel) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        user_id: Joi.string().required(),
        product_id: Joi.string().required(),
        rating: Joi.string().required(),
        review: Joi.string().required(),
        is_deleted: Joi.string().required(),
        created_at: Joi.string().required()
    });

    return schema.validate(review);
}


export default validateReview;
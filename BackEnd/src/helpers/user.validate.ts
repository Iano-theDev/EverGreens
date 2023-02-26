import joi from 'joi';




// validate user

const validateUser = (user: any) => {
    const schema = joi.object({
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required()
    });

    return schema.validate(user);
}

export default validateUser;
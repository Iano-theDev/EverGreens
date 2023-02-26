// CREATE TABLE Payment_methods (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description VARCHAR(255) NOT NULL,
//     CHECK (name <> ''),
//     CHECK (description <> ''),
// );


// create a payment method model class to be used as a type for the payment method

class PaymentMethodModel {
     id: string;
     name: string;
     description: string;

    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

export default PaymentMethodModel;
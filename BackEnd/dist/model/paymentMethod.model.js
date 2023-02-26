"use strict";
// CREATE TABLE Payment_methods (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description VARCHAR(255) NOT NULL,
//     CHECK (name <> ''),
//     CHECK (description <> ''),
// );
Object.defineProperty(exports, "__esModule", { value: true });
// create a payment method model class to be used as a type for the payment method
class PaymentMethodModel {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
exports.default = PaymentMethodModel;

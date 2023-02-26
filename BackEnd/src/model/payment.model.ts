// CREATE TABLE Payments (
//     id VARCHAR(255) PRIMARY KEY,
//     user_id VARCHAR(255) NOT NULL,
//     order_id VARCHAR(255) NOT NULL,
//     amount DECIMAL(10,2) NOT NULL,
//     payment_method_id VARCHAR(255) NOT NULL,
//     created_at string NOT NULL DEFAULT GETDATE(),
//     CHECK (amount > 0),
//     FOREIGN KEY (user_id) REFERENCES users(id),
//     FOREIGN KEY (order_id) REFERENCES orders(id),
//     FOREIGN KEY (payment_method_id) REFERENCES payment_methods(id),
// );


// create a payment model class to be used as a type for the payment

class PaymentModel {
     id: string;
     user_id: string;
     order_id: string;
     amount: string;
     payment_method_id: string;

    constructor(id: string, user_id: string, order_id: string, amount: string, payment_method_id: string, created_at: string) {
        this.id = id;
        this.user_id = user_id;
        this.order_id = order_id;
        this.amount = amount;
        this.payment_method_id = payment_method_id;
    }
}



export default PaymentModel;
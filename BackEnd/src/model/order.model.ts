// CREATE TABLE Orders (
//     id VARCHAR(255) PRIMARY KEY,
//     user_id VARCHAR(255) NOT NULL,
//     created_at DATE NOT NULL DEFAULT GETDATE(),
//     is_paid BIT NOT NULL DEFAULT 0,
//     is_delivered BIT NOT NULL DEFAULT 0,
//     amount DECIMAL(10,2) NOT NULL,
//     CHECK (is_paid IN (0,1)),
//     CHECK (is_delivered IN (0,1)),
//     CHECK (amount > 0),
//     CHECK (created_at <= GETDATE()),
//     FOREIGN KEY (user_id) REFERENCES users(id),
// );


// create a order model class to be used as a type for the order

class OrderModel {
     id: string;
     user_id: string;
     created_at: string;
     is_paid: string;
     is_delivered: string;
     amount: string;

    constructor(id: string, user_id: string, created_at: string, is_paid: string, is_delivered: string, amount: string) {
        this.id = id;
        this.user_id = user_id;
        this.created_at = created_at;
        this.is_paid = is_paid;
        this.is_delivered = is_delivered;
        this.amount = amount;
    }
}


export default OrderModel;
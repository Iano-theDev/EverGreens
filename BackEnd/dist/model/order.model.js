"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// create a order model class to be used as a type for the order
class OrderModel {
    constructor(id, user_id, created_at, is_paid, is_delivered, amount) {
        this.id = id;
        this.user_id = user_id;
        this.created_at = created_at;
        this.is_paid = is_paid;
        this.is_delivered = is_delivered;
        this.amount = amount;
    }
}
exports.default = OrderModel;

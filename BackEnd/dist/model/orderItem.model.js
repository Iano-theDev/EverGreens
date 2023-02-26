"use strict";
// CREATE TABLE Order_items (
//     id VARCHAR(255) PRIMARY KEY,
//     order_id VARCHAR(255) NOT NULL,
//     product_id VARCHAR(255) NOT NULL,
//     quantity INTEGER NOT NULL,
//     CHECK (order_id > 0),
//     CHECK (product_id > 0),
//     CHECK (quantity > 0),
//     FOREIGN KEY (order_id) REFERENCES orders(id),
//     FOREIGN KEY (product_id) REFERENCES products(id),
// );
Object.defineProperty(exports, "__esModule", { value: true });
// create a order item model class to be used as a type for the order item
class OrderItemModel {
    constructor(id, order_id, product_id, quantity) {
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}
exports.default = OrderItemModel;

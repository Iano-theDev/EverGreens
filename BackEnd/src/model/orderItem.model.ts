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


// create a order item model class to be used as a type for the order item

class OrderItemModel {
     id: string;
     order_id: string;
     product_id: string;
     quantity: string;

    constructor(id: string, order_id: string, product_id: string, quantity: string) {
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}


export default OrderItemModel;

USE [comfortyEcommerce]
GO
CREATE TABLE Payments (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    order_id VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method_id VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    CHECK (amount > 0),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (payment_method_id) REFERENCES payment_methods(id),
);
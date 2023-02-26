
USE [comfortyEcommerce]
GO
CREATE TABLE Cart_items (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    CHECK (quantity > 0),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
);



DELETE FROM Cart_items;

SELECT * FROM Users 


UPDATE Users SET is_sent = '0' WHERE email ='kevinmalomba@gmail.com'
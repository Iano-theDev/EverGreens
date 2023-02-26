
USE [comfortyEcommerce]
GO
CREATE TABLE Reviews (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL,
    review VARCHAR(255) NOT NULL,
    is_deleted BIT NOT NULL DEFAULT 0,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    CHECK (rating > 0),
    CHECK (review <> ''),
    CHECK (created_at <= GETDATE()),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id),

);
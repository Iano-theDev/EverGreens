
USE [comfortyEcommerce]
GO
CREATE TABLE Orders (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    is_paid BIT NOT NULL DEFAULT 0,
    is_delivered BIT NOT NULL DEFAULT 0,
    amount DECIMAL(10,2) NOT NULL,
    CHECK (is_paid IN (0,1)),
    CHECK (is_delivered IN (0,1)),
    CHECK (amount > 0),
    CHECK (created_at <= GETDATE()),
    FOREIGN KEY (user_id) REFERENCES users(id),
);
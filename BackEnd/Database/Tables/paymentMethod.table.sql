
USE [comfortyEcommerce]
GO
CREATE TABLE Payment_methods (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    CHECK (name <> ''),
    CHECK (description <> ''),
);
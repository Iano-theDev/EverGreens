
USE [comfortyEcommerce]
GO
CREATE TABLE Users (
    id VARCHAR(255) PRIMARY KEY, 
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    is_admin BIT NOT NULL DEFAULT 0,
    is_deleted BIT NOT NULL DEFAULT 0,
    phone VARCHAR(255) NOT NULL,
    is_sent BIT NOT NULL DEFAULT 0,
    UNIQUE (email),
    CHECK (is_admin IN (0,1)),
    CHECK (email <> ''),
    CHECK (password <> ''),
    CHECK (created_at <= GETDATE()),
);




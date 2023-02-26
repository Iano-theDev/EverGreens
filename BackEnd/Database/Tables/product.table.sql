USE [comfortyEcommerce]
GO
CREATE TABLE Products
(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    category_id VARCHAR(255) NOT NULL,
    product_image_url VARCHAR(255) NOT NULL,
    recently_added BIT NOT NULL DEFAULT 1,
    featured BIT NOT NULL DEFAULT 0,
    is_deleted BIT NOT NULL DEFAULT 0,
    CHECK (name <> ''),
    CHECK (description <> ''),
    CHECK (price > 0),
    CHECK (product_image_url <> ''),
    CHECK (recently_added IN (0,1)),
    CHECK (featured IN (0,1)),
    FOREIGN KEY (category_id) REFERENCES categories(id),
);

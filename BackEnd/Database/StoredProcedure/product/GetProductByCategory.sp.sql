USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetProductByCategory
@category_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM products WHERE category_id = @category_id
END

-- create stored procude to get product that category is top level

